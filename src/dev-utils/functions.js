export const getRandomData = (length) => {
  return Array.from({ length }, () => Math.floor(Math.random() * 100))
}

export const toCamelCase = (str) => {
  return str
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
      index === 0 ? match.toLowerCase() : match.toUpperCase()
    ).replace(/\s+/g, '');
}

export const getItemDescendantsIds = (item) => {
  const ids = []
  item.children?.forEach((child) => {
    ids.push(child.id);
    ids.push(...getItemDescendantsIds(child));
  })

  return ids
}