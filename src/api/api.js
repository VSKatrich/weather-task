import axios from "axios"

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/'
});

export const getWeatherData = (lat, lon) => {
  return (
    instance.get(`weather?appid=bf65d8b174418831a16055a19f50144f&lat=${lat}&lon=${lon}&units=metric`).then(res => res.data)
  )
}