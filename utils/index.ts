export const fetcher = url => fetch(url).then(res => res.json())

export const recipeMap = new Map()
recipeMap.set('Veg Biryani', ['vegetable', 'biryani'])
recipeMap.set('Non-Veg Biryani', ['mutton', 'chicken', 'egg', 'biryani'])
recipeMap.set('Veg Gravy', ['mushroom', 'gravy'])
recipeMap.set('Non-Veg Gravy', ['chicken', 'gravy'])
recipeMap.set('Sweet', ['sweet'])
recipeMap.set('Poriyal', ['kootu', 'poriyal'])
recipeMap.set('Kuzhambu', ['Kulambu', 'curry', 'sambar', 'kuzhambu'])
recipeMap.set('Rasam', ['rasam'])

export const getRecipeFilters = () => {
  let arr = []
  recipeMap.forEach((value, key) => {
    arr.push(key)
  })
  return arr
}

export const filterDataByMap = (key, items = []) => {
  return items.filter(curItem => {
    const {
      snippet: { title = '' },
    } = curItem

    const words = recipeMap.get(key)
    let regex = new RegExp(
      '\\b(' + words.slice(0, words.length - 1).join('|') + ')\\b',
      'g'
    )

    return (
      regex.test(title.toLowerCase()) &&
      title.toLowerCase().includes(words[words.length - 1])
    )
  })
}
