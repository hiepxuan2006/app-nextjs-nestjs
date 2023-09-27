import store from 'store'
const _prefix = 'com.hiepxuan206.'

// eslint-disable-next-line no-unused-vars
const _getRealKey = (key: string, noPrefix = false) => {
  if (noPrefix) {
    return key
  }

  return _prefix + key
}

export const getLocalData = (
  key: string,
  defaultValue = null,
  noPrefix = false
) => {
  const realKey = _getRealKey(key, noPrefix)

  const value = store.get(realKey) || defaultValue

  try {
    return JSON.parse(value)
  } catch (e) {
    return value
  }
}

export const setLocalData = (key: string, value: any, noPrefix = false) => {
  const realKey = _getRealKey(key, noPrefix)

  const type = typeof value
  if (type === 'object') {
    value = JSON.stringify(value)
  }

  store.set(realKey, value)

  return value
}

export const removeLocalData = (key: string, noPrefix = false) => {
  const realKey = _getRealKey(key, noPrefix)

  return store.remove(realKey)
}
