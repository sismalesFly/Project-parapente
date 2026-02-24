export function generateClientId(turnId: string, index: number) {
  return `${turnId}-${String(index + 1).padStart(3, "0")}`
}
