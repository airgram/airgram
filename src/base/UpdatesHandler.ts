/*tslint:disable:no-bitwise*/

import { inject, interfaces } from 'inversify'
import { provide } from 'inversify-binding-decorators'
import * as get from 'lodash/get'
import * as isEmpty from 'lodash/isEmpty'
import * as api from '../api'
import Serializable from '../errors/Serializable'
import { now } from '../helpers'
import { ag } from '../interfaces/index'
import TYPES from '../ioc/types'

const stop = () => false

let handlerId = 0

@provide(TYPES.UpdatesHandler)
export default class UpdatesHandler implements ag.UpdatesHandler {
  public static factory (
    context: interfaces.Context,
    createInstance: () => ag.UpdatesHandler,
    updates: ag.Updates,
    ctx: ag.Context,
    complete: (update: api.UpdateUnion) => any
  ) {
    const instance = context.container.get<ag.UpdatesHandler>(TYPES.UpdatesHandler)
    instance.request = ctx.request
    instance.getDifference = () => updates.getDifference()
    instance.getChannelDifference = (chat: ag.Chat) => updates.getChannelDifference(chat)
    instance.updatesState = updates.updatesState
    instance.chats = updates.chats
    instance.myId = ctx.client.me.id
    instance.complete = complete
    return instance
  }

  public static createStateOptions (update: { [key: string]: any }): ag.UpdatesStateOptions {
    return {
      date: update.date,
      seq: update.seq,
      seqStart: update.seq_start
    }
  }

  public chatIndex: Map<number, ag.ChatDoc> = new Map()
  public chats: ag.Chats
  public complete: (update: ag.UpdatesResponse) => Promise<any>
  public getChannelDifference: (state: ag.Chat) => Promise<api.UpdatesChannelDifferenceUnion>
  public getDifference: () => Promise<api.UpdatesDifferenceUnion>
  public handlerId: number
  public myId: number
  public options = {
    loadLongChannelDifference: false
  }
  public request: ag.ContextRequest
  public updatesState: ag.UpdatesState

  constructor (@inject(TYPES.Logger) public logger: ag.Logger) {
    this.handlerId = ++handlerId
    this.handle = this.handle.bind(this)
  }

  public async handle (update: ag.UpdatesResponse, options?: ag.UpdatesStateOptions): Promise<boolean> {
    if ('chats' in update) {
      await this.indexChats(update.chats)
    }

    this.logger.verbose(`[${this.handlerId}] handle() "${update._}" ${JSON.stringify(options)}`)

    switch (update._) {
      // CHATS
      case 'updatesCombined':
      case 'updates': {
        await this.complete(update)
        return this.handleMultipleUpdate(update.updates, UpdatesHandler.createStateOptions(update)).then(stop)
      }

      case 'updateShort': {
        await this.complete(update)
        return this.handle(update.update, UpdatesHandler.createStateOptions(update)).then(stop)
      }

      case 'updateShortMessage':
      case 'updateShortChatMessage': {
        const {
          flags,
          id,
          message,
          fwd_from: fwdFrom,
          reply_to_msg_id: replyToMsgId,
          entities,
          pts,
          pts_count: ptsCount,
          date
        } = update
        const isOut = flags & 2
        const userId = 'user_id' in update && update.user_id
        const fromId = ('from_id' in update && update.from_id) || (isOut ? this.myId : userId)

        await this.complete(update)

        return this.handle({
          _: 'updateNewMessage',
          message: {
            _: 'message',
            date,
            entities,
            flags,
            from_id: fromId,
            fwd_from: fwdFrom,
            id,
            message,
            reply_to_msg_id: replyToMsgId,
            to_id: await this.getPeer(update, isOut)
          } as api.Message,
          pts,
          pts_count: ptsCount
        } as api.UpdateNewMessage).then(stop)
      }

      case 'updateNewMessage':
      case 'updateEditMessage': {
        try {
          if (!await this.checkCompleteness(update)) {
            return false
          }
        } catch (error) {
          throw error
        }
        break
      }

      case 'updatesTooLong': {
        await this.complete(update)
        return this.getDifference().then(stop)
      }

      case 'updates.difference': {
        const { date, seq, pts } = update.state
        await this.complete(update)
        return Promise.all([
          this.handleMultipleUpdate(update.other_updates),
          this.handleUpdateEncryptedMessages(update.new_encrypted_messages),
          this.handleUpdateMessages(update.new_messages)
        ])
          .then(() => this.updatesState.set({ date, seq, pts }))
          .then(stop)
      }

      case 'updates.differenceEmpty': {
        const { date, seq } = update
        await this.updatesState.set({ date, seq })
        await this.updatesState.completeLoading()
        await this.complete(update)
        return true
      }

      case 'updates.differenceSlice': {
        const { date, seq, pts } = update.intermediate_state
        await this.complete(update)
        return Promise.all([
          this.handleMultipleUpdate(update.other_updates),
          this.handleUpdateMessages(update.new_messages)
        ])
          .then(() => this.updatesState.set({ date, seq, pts }))
          .then(() => setImmediate(this.getDifference()))
          .then(stop)
      }

      // CHANNELS
      case 'updateChannelTooLong': {
        const channelId = update.channel_id

        if (!channelId) {
          this.throwHandleError(update, 'undefined channel_id')
        }

        await this.complete(update)

        return this.getChat(channelId).then(async (chat: ag.ChatDoc) => {
          if (!chat || !chat.ptsTs || chat.ptsTs < now() - 10000) {
            this.logger.verbose(`${update._} will call "api.updates.getChannelDifference" `)
            this.getChannelDifference(this.chats.getChat(chat.id)).catch((error) => {
              throw error
            })
          }
          return false
        })
      }

      case 'updateNewChannelMessage':
      case 'updateEditChannelMessage': {
        const { message } = update

        if (message._ === 'messageEmpty') {
          await this.complete(update)
          return true
        }

        const channelId = ((message.to_id._ === 'peerChannel' && message.to_id.channel_id)
          || (message.to_id._ === 'peerChat' && message.to_id.chat_id)) as number

        try {
          if (!await this.checkCompleteness(update, channelId)) {
            return false
          }
        } catch (error) {
          throw error
        }

        return this.handleUpdateChannelState(channelId, update, options).then(async (status) => {
          if (status) {
            await this.complete(update)
          }
          return status
        })
      }

      case 'updateDeleteChannelMessages': {
        return this.handleUpdateChannelState(update.channel_id, update, options).then(async (status) => {
          if (status) {
            await this.complete(update)
          }
          return status
        })
      }

      case 'updates.channelDifference': {
        const channelId = get(this.request, 'params.channel.channel_id')

        if (!channelId) {
          this.logger.error(`[${this.handlerId}] handle() "updates.channelDifference" channel_id is undefined`)
          return false
        }

        await this.complete(update)

        return this.chats.update(channelId, { pts: update.pts }).then((chat) => {
          return Promise.all([
            this.handleMultipleUpdate(update.other_updates, channelId),
            this.handleUpdateMessages(update.new_messages, channelId)
          ]).then(() => {
            if (!update.final && 'access_hash' in chat) {
              return this.getChannelDifference(chat).then(stop)
            } else {
              return this.chats.getChat(channelId).completeLoading().then(stop)
            }
          })
        })
      }

      case 'updates.channelDifferenceEmpty':
      case 'updates.channelDifferenceTooLong': {
        const channelId = get(this.request, 'params.channel.channel_id')
        if (!channelId) {
          return this.throwHandleError(update, `channel "${channelId}" not found`)
        }

        return this.chats.getChat(channelId).completeLoading().then(async () => {
          if (update._ === 'updates.channelDifferenceEmpty') {
            return this.complete(update).then(() => true)
          }

          if (this.options.loadLongChannelDifference) {
            return this.getChat(channelId).then(async (chat) => {
              if (chat) {
                await this.complete(update)
                return this.chats.update(chat.id, { pts: update.pts })
                  .then(() => this.handleUpdateMessages(update.messages))
                  .then(stop)
              } else {
                return this.throwHandleError(update, `chat "${channelId}" not found`)
              }
            })
          } else {
            await this.complete(update)
            return this.handle({ _: 'updateChannelReload', channel_id: channelId }).then(stop)
          }
        })
      }
    }

    const handled = await this.handleUpdateState(update, options)

    if (handled) {
      await this.complete(update)
    }
    return handled
  }

  protected async checkCompleteness (
    update: api.UpdateNewMessage | api.UpdateEditMessage | api.UpdateNewChannelMessage | api.UpdateEditChannelMessage,
    channelId?: number
  ): Promise<boolean> {
    return true
  }

  protected async handleEncryptedUpdate (update: api.UpdateNewEncryptedMessage) {
    this.logger.error(`[${this.handlerId}] handleEncryptedUpdate() method has not implemented yet.`, update)
  }

  protected async handleMultipleUpdate (
    updates: api.UpdateUnion[],
    options?: ag.UpdatesStateOptions,
    channelId?: number
  ): Promise<any> {
    if (updates && Array.isArray(updates)) {
      return this.reduce(updates.map((update) => this.handle(update, !channelId ? options : undefined)))
    }
  }

  protected async handleUpdateChannelState (
    channelId: number,
    update: api.UpdateNewChannelMessage | api.UpdateEditChannelMessage | api.UpdateDeleteChannelMessages,
    options: ag.UpdatesStateOptions = {}
  ): Promise<boolean> {
    return this.getChat(channelId).then(async (chat: ag.ChatDoc) => {
      if (!chat) {
        this.throw('handleUpdateChannelState', `chat "${channelId}" not found`)
      }

      const updatesState = this.chats.getChat(channelId)
      const { pts = 0, pts_count: ptsCount = 0 } = update
      const { date } = options
      const nextState: Partial<ag.UpdatesStateDoc> = {}

      if (!chat.pts) {
        nextState.pts = pts
        if (date) {
          nextState.date = date
        }
        return updatesState.set(nextState).then(() => true)
      }

      if (updatesState.loading) {
        this.logger.verbose(`[${this.handlerId}] handleUpdateChannelState() ` +
          `channel "${channelId}" loading in progress, skip update`)
        return false
      }

      const newPts = chat.pts + ptsCount
      let hasPtsUpdates = false

      if (pts) {
        if (newPts < pts) {
          this.logger.verbose(`[${this.handlerId}] handleUpdateChannelState() ` +
            `channel "${channelId}" has a pts hole (${pts} > ${chat.pts} + ${ptsCount}), wait for true pts`)

          updatesState.postponePtsUpdate(
            update as api.UpdateUnion,
            async () => chat.accessHash ?
              this.getChannelDifference(this.chats.getChat(channelId)) :
              this.getDifference()
          )
          return false
        }

        if (pts > chat.pts) {
          hasPtsUpdates = true
          nextState.pts = pts
          nextState.ptsTs = now()
        } else if (ptsCount) {
          this.logger.verbose(`[${this.handlerId}] handleUpdateChannelState() ` +
            `channel "${channelId}" has a duplicate update (${update.pts} <= ${pts} + ${update.pts_count}), skip it`)
          return false
        }
        if (date && chat.date && chat.date < date) {
          nextState.date = date
        }
      }

      if (!isEmpty(nextState)) {
        await updatesState.set(nextState)
      }

      if (hasPtsUpdates) {
        setImmediate(() => updatesState.applyPtsUpdates(this.complete))
      }

      return true
    })
  }

  protected handleUpdateEncryptedMessages (messages: api.EncryptedMessageUnion[]): Promise<void> {
    return this.reduce(messages.map((message) =>
      this.handleEncryptedUpdate({ _: 'updateNewEncryptedMessage', message, qts: 0 })
    ))
  }

  protected handleUpdateMessages (messages: api.MessageUnion[], channelId?: number): Promise<void> {
    return this.reduce(messages.map((message) => new Promise(async (resolve, reject) => {
      if (channelId) {
        this.getChat(channelId).then((chat: ag.ChatDoc) => {
          if (chat) {
            this.handle({
              _: 'updateNewChannelMessage',
              message,
              pts: chat.pts,
              pts_count: 0
            } as api.UpdateNewChannelMessage).then(resolve, reject)
          } else {
            reject(new Error(`handleUpdateMessages() chat "${channelId}" not found`))
          }
        }).catch(reject)
      } else {
        this.handle({
          _: 'updateNewMessage',
          message,
          pts: (await this.updatesState.get()).pts,
          pts_count: 0
        } as api.UpdateNewMessage).then(resolve, reject)
      }
    })))
  }

  protected async handleUpdateState (
    update: ag.UpdatesResponse,
    options: ag.UpdatesStateOptions = {}
  ): Promise<boolean> {
    const { updatesState } = this

    if (updatesState.loading) {
      this.logger.verbose(`[${this.handlerId}] handleUpdateState() ` +
        `updates difference loading in progress, skip this update`)
      return false
    }

    const nextState: Partial<ag.UpdatesStateDoc> = {}
    const { pts, seq, date } = await this.updatesState.get()

    let hasPtsUpdates = false
    let hasSeqUpdates = false

    if ('pts' in update && 'pts_count' in update) {
      const newPts = pts + (update.pts_count || 0)
      if (newPts < update.pts) {
        this.logger.verbose(`[${this.handlerId}] handleUpdateState() ` +
          `detected a pts hole (${pts} > ${update.pts} + ${update.pts_count}), wait for true pts`)
        return false
      }

      if (update.pts > pts) {
        hasPtsUpdates = true
        nextState.pts = update.pts
        nextState.ptsTs = now()
      } else if (update.pts_count) {
        this.logger.verbose(`[${this.handlerId}] handleUpdateState() ` +
          `detected a duplicate update (${update.pts} <= ${pts} + ${update.pts_count}), skip this update`)
        return false
      }
    }

    options.seq = options.seq || 0
    if ('date' in update && options.seq > 0) {
      const seqStart = options.seqStart || options.seq || 0
      if (seqStart !== seq + 1) {
        if (seqStart > seq) {
          this.logger.verbose(`[${this.handlerId}] handleUpdateState() ` +
            `detected a seq hole (${seqStart} > ${seq}), wait for true seq`)

          updatesState.postponeSeqUpdate(
            update as api.UpdateUnion, seqStart,
            options.seq,
            async () => this.getDifference()
          )
          return false
        }
      }

      if (seq !== options.seq) {
        nextState.seq = options.seq
        if ('date' in update && date < update.date) {
          nextState.date = update.date
        }
        hasSeqUpdates = true
      }
    }

    if (!isEmpty(nextState)) {
      await updatesState.set(nextState)
    }

    if (hasPtsUpdates) {
      setImmediate(() => updatesState.applyPtsUpdates(this.complete))
    } else if (hasSeqUpdates) {
      setImmediate(() => updatesState.applySeqUpdates(this.complete))
    }

    return true
  }

  protected reduce (handles: Array<Promise<any>>): Promise<any> {
    return handles.reduce((promise, handle) => {
      return promise
        .then(() => handle)
        .catch((error) => {
          this.logger.error(() => `[${this.handlerId}] reduce() ${new Serializable(error)}`)
          return handle
        })
    }, Promise.resolve())
  }

  private async getChat (id: number): Promise<ag.ChatDoc | null> {
    if (this.chatIndex.has(id)) {
      return Promise.resolve(this.chatIndex.get(id) || null)
    }

    return this.chats.get(id)
  }

  private async getPeer (update: api.UpdateShortMessage | api.UpdateShortChatMessage, isOut) {
    if (('chat_id' in update && update.chat_id)) {
      const chat = await this.getChat(update.chat_id)

      if (!chat) {
        throw new Error(`getPeer() chat "${update.chat_id}" not found`)
      }
      if (chat.type === 'channel' || chat.type === 'channelForbidden') {
        return { _: 'peerChannel', channel_id: update.chat_id }
      }
      return { _: 'peerChat', channel_id: update.chat_id }

    } else {
      return { _: 'peerUser', user_id: (isOut && 'user_id' in update && update.user_id) || this.myId }
    }
  }

  private indexChats (chats: api.ChatUnion[]): Promise<Map<number, ag.ChatDoc>> {
    return chats.reduce((promise, chat) => {
      return promise.then(async (map: Map<number, ag.ChatDoc>) => {
        const currentDoc = await this.chats.get(chat.id)
        const chatDoc: ag.ChatDoc = currentDoc || {
          id: chat.id,
          type: chat._
        }
        if ('date' in chat && chat.date) {
          chatDoc.date = chat.date
        }
        if ('access_hash' in chat) {
          chatDoc.accessHash = chat.access_hash
        }
        if (chatDoc.min !== false) {
          chatDoc.min = 'min' in chat && chat.min
        }
        if (chatDoc.accessHash || chatDoc.date) {
          try {
            if (currentDoc) {
              await this.chats.update(chatDoc.id, chatDoc)
            } else {
              await this.chats.create(chatDoc.id, chatDoc)
            }
          } catch (error) {
            throw error
          }
        }
        map.set(chatDoc.id, chatDoc)
        return map
      })
    }, Promise.resolve(this.chatIndex)).then((map) => {
      return map
    })
  }

  private throw (method: string, message: string): any {
    const text = `[${this.handlerId}] ${method}() ${message}`
    throw new Error(text)
  }

  private throwHandleError (update: ag.UpdatesResponse, message): any {
    return this.throw('handle', `"${update._}" ${message}`)
  }
}
