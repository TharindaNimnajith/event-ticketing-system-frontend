import axios from 'axios'
import {useState} from 'react'
import ErrorAlert from '../component/ErrorAlert'
import Header from '../component/Header'
import InfoAlert from '../component/InfoAlert'
import Loading from '../component/Loading'
import {BASE_URL_LOCALHOST_V1} from '../config/config'

const Simulation = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const startSimulation = () => {
    setData(null)
    setError(null)
    setLoading(true)
    axios.post(`${BASE_URL_LOCALHOST_V1}ticketing/start`)
    .then(response => {
      setData(response.data)
    })
    .catch(error => {
      setError(error.response.data)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  const stopSimulation = () => {
    setData(null)
    setError(null)
    setLoading(true)
    axios.post(`${BASE_URL_LOCALHOST_V1}ticketing/stop`)
    .then(response => {
      setData(response.data)
    })
    .catch(error => {
      setError(error.response.data)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  return (
      <div>
        <Header header="Simulation"/>
        <div className="flex gap-4 mb-4">
          <button onClick={startSimulation} className="rounded bg-green-700 text-white px-4 py-2">
            Start Simulation
          </button>
          <button onClick={stopSimulation} className="rounded bg-red-700 text-white px-4 py-2">
            Stop Simulation
          </button>
        </div>
        {
          loading ? (
              <Loading/>
          ) : error ? (
              <ErrorAlert error={error}/>
          ) : data ? (
              <InfoAlert data={data}/>
          ) : null
        }
      </div>
  )
}

export default Simulation
