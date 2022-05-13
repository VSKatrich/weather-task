import { useState } from 'react'
import './App.css'
import WeatherData from './components/WeatherData'
import WeatherDataForm from './components/WeatherDataForm'

function App() {
  const [data, setData] = useState({})

  return (
    <div className="container">
      <WeatherDataForm setData={setData} />
      <WeatherData data={data} />
    </div>
  );
}

export default App;
