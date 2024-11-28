import axios from 'axios'
import {useEffect, useState} from 'react'
import ErrorAlert from '../component/ErrorAlert'
import {BASE_URL_LOCALHOST_V1} from '../config/config'

const Configurations = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
    .get(`${BASE_URL_LOCALHOST_V1}configs`)
    .then(response => {
      setData(response.data)
    })
    .catch(error => {
      setError(error.response.data)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  return (
      <div>
        <h2 className="text-xl font-bold mb-4">Ticketing Configurations</h2>
        {
          loading ? (
              <div className="text-center">Loading...</div>
          ) : error ? (
              <ErrorAlert error={error}/>
          ) : (
              <div>
                <p><strong>Max Ticket Capacity:</strong> {data?.data?.max_ticket_capacity}</p>
                <p><strong>Total Tickets:</strong> {data?.data?.total_tickets}</p>
                <p><strong>Ticket Release Rate (In Seconds):</strong> {data?.data?.ticket_release_rate}</p>
                <p><strong>Customer Retrieval Rate (In Seconds):</strong> {data?.data?.customer_retrieval_rate}</p>
              </div>
          )
        }
      </div>
  )
}

export default Configurations
