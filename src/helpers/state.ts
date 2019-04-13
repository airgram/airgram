export function createState (starting: Record<string, any>) {
  let state = { ...starting }
  const getState = () => ({ ...state })
  const setState = (next) => {
    if (typeof next === 'function') {
      state = { ...state, ...next(state) }
    } else {
      state = { ...state, ...next }
    }
  }
  return { getState, setState }
}
