export default function orderByProps(heroProps, sortNames) {
  const sortedList = []
  const sortedWithoutSortNames = []

  for (const sortProp of sortNames) {
    if (sortProp in heroProps) {
      sortedList.push({key: sortProp, value: heroProps[sortProp]})
    }
  }

  for (const heroProp in heroProps) {
    if (!sortNames.includes(heroProp)) {
      sortedWithoutSortNames.push({key: heroProp, value: heroProps[heroProp]})

    }
  }

  sortedWithoutSortNames.sort(function (a, b) {
    if (a.key > b.key) {
      return 1;
    } if (a.key < b.key) {
      return -1;
    }
  })

  return [...sortedList, ...sortedWithoutSortNames]
}