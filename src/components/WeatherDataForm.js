import React, { useEffect, useState } from 'react'

import { getWeatherData } from '../api/api'
import { getLocalStore, setLocalStorage } from '../utils/localStorage'

import style from './FormStyle.module.css'

const WeatherDataForm = ({ setData }) => {
  const [lat, setLatitude] = useState('')
  const [lon, setLongitude] = useState('')

  const sendRequest = (lat, lon) => {
    getWeatherData(lat, lon).then(data => setData(data))
  }

  const submit = () => {
    sendRequest(lat, lon)
    setLocalStorage(lat, lon)
  }

  useEffect(() => {
    const { localLat, localLon } = getLocalStore()

    if (localLat && localLon) {
      sendRequest(localLat, localLon)
    }
  }, [])

  useEffect(() => {
    const restartRequest = setInterval(() => {
      const { localLat, localLon } = getLocalStore()

      sendRequest(localLat, localLon)
    }, 30000)

    return () => {
      clearInterval(restartRequest)
    }
  }, [])

  return (
    <div className={style.container}>
      <div className={style.label}>
        Enter Latitude and Longitude
      </div>

      <input
        className={style.input}
        onChange={e => setLatitude(e.target.value)}
        value={lat}
        placeholder="Latitude" />

      <input
        className={style.input}
        onChange={e => setLongitude(e.target.value)}
        value={lon}
        placeholder="Longitude" />

      <div>
        <button className={style.button} onClick={submit}>
          submit
        </button>
      </div>
    </div>
  )
}
export default WeatherDataForm