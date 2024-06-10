export const getRandomData = (length) => {
  return Array.from({ length }, () => Math.floor(Math.random() * 100))
}