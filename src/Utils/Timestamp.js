export function getTimestamp() {
  const dateObject = new Date()

  const day = dateObject.getDate()
  const month = dateObject.getMonth() + 1
  const year = dateObject.getFullYear()

  return `${day}/${month}/${year}`
}
