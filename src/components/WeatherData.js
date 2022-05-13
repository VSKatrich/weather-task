import style from './WeatherData.module.css'

const WeatherData = ({ data }) => {
  const today = new Date()
  const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

  return (
    <div className={style.container}>
      <table className={style.table}>
        <tbody>
          <tr>
            <th>Time</th>
            <th>Name</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Temperature (in Celsius)</th>
            <th>Pressure</th>
            <th>Humidity</th>
            <th>MIN Temperature</th>
            <th>MAX Temperature</th>
          </tr>
          <tr>
            <td> {data.main && time} </td>
            <td>{data?.name}</td>
            <td>{data.coord?.lat}</td>
            <td>{data.coord?.lon}</td>
            <td>{data.main?.temp}</td>
            <td>{data.main?.pressure}</td>
            <td>{data.main?.humidity}</td>
            <td>{data.main?.temp_min}</td>
            <td>{data.main?.temp_max}</td>
          </tr>
        </tbody>
      </table>

      {data.main && (
        <div className={style.time}>
          Last refresh {time}
        </div>
      )}
    </div>
  )
}

export default WeatherData
