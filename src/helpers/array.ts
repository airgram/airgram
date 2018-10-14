export function reduce (handles: Array<Promise<any>>, errorHandle?: (error: Error) => any): Promise<any> {
  return handles.reduce((promise, handle) => {
    return promise
      .then(() => handle)
      .catch(errorHandle || ((error) => {
        throw error
      }))
  }, Promise.resolve())
}
