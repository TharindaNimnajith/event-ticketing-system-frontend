import {useState} from 'react'
import ErrorAlert from '../component/ErrorAlert'
import Header from '../component/Header'
import Loading from '../component/Loading'

const Simulation = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const startSimulation = () => {
    // Call your backend API or simulation start logic here
  }

  const stopSimulation = () => {
    // Call your backend API or simulation stop logic here
  }

  return (
      <div>
        <Header header="Simulation"/>
        {
          loading ? (
              <Loading/>
          ) : error ? (
              <ErrorAlert error={error}/>
          ) : null
        }
        <div className="flex gap-4 mb-4">
          <button onClick={startSimulation} className="rounded bg-green-500 text-white px-4 py-2">
            Start
          </button>
          <button onClick={stopSimulation} className="rounded bg-red-500 text-white px-4 py-2">
            Stop
          </button>
        </div>
      </div>
  )
}

export default Simulation
