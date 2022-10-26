export const setStorageItem = (key, data) => localStorage.setItem(key, JSON.stringify(data))
export const getStorageItem = (key) => {
  const data = localStorage.getItem(key)
  if (!data) return null
  try {
    return JSON.parse(data)
  } catch (e) {
    console.error(e)
    return null
  }
}

export const initializeStorage = () => {
  if (!getStorageItem('companies') || !getStorageItem('persons')) {
    localStorage.clear()
    setStorageItem('companies', [])
    setStorageItem('persons', [])
  }
}
