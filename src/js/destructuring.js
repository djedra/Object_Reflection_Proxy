export default function destructuring(characterObject) {
  const array = []

  for (const prop of characterObject.special) {
    if ('description' in prop) {
      array.push(prop)
    } else {
      const addDescription = prop

      addDescription['description'] = 'Описание недоступно'
      array.push(addDescription)
    }
  }
  return array
}