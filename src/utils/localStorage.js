const LAT_KEY = 'LAT_KEY'
const LON_KEY = 'LON_KEY'

export const getLocalStore = () => {
  const localLat = localStorage.getItem(LAT_KEY)
  const localLon = localStorage.getItem(LON_KEY)

  return { localLat, localLon }
}

export const setLocalStorage = (lat, lon) => {
  localStorage.setItem(LAT_KEY, lat)
  localStorage.setItem(LON_KEY, lon)
}
