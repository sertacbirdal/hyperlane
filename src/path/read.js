import normalize from './normalize'

const read = (path, data) => {
  const location = normalize(path)
  let value = data
  let i

  for (let i = 0; i < location.length; i++) {
    value = value[location[i]]

    if (value === undefined) {
      return undefined
    }
  }

  return value
}

export default read
