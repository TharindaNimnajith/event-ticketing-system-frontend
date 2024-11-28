import {useState} from 'react'
import ErrorAlert from '../component/ErrorAlert'

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
        <h2 className="text-xl font-bold mb-4">Simulation</h2>
        {
          loading ? (
              <div className="text-center">Loading...</div>
          ) : error ? (
              <ErrorAlert error={error}/>
          ) : null
        }
        <div className="flex gap-4 mb-4">
          <button onClick={startSimulation} className="px-4 py-2 rounded bg-green-500 text-white">
            Start
          </button>
          <button onClick={stopSimulation} className="px-4 py-2 rounded bg-red-500 text-white">
            Stop
          </button>
        </div>
      </div>
  )
}

export default Simulation
