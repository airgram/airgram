export function now (seconds?: boolean) {
  const t = new Date().getTime()
  return seconds ? Math.floor(t / 1000) : t
}
