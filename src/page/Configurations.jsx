import axios from 'axios'
import {useEffect, useState} from 'react'
import ErrorAlert from '../component/ErrorAlert'
import Loading from '../component/Loading'
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
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">Ticketing Configurations</h2>
        {
          loading ? (
              <Loading/>
          ) : error ? (
              <ErrorAlert error={error}/>
          ) : (
              <table className="table-auto border-collapse border border-gray-400">
                <thead>
                  <tr>
                    <th className="border border-gray-400 px-4 py-2">Configuration</th>
                    <th className="border border-gray-400 px-4 py-2">Value</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Max Ticket Capacity</td>
                  <td className="border border-gray-400 px-4 py-2">{data?.data?.max_ticket_capacity}</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Total Tickets</td>
                  <td className="border border-gray-400 px-4 py-2">{data?.data?.total_tickets}</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Ticket Release Rate (In Seconds)</td>
                  <td className="border border-gray-400 px-4 py-2">{data?.data?.ticket_release_rate}</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">Customer Retrieval Rate (In Seconds)</td>
                  <td className="border border-gray-400 px-4 py-2">{data?.data?.customer_retrieval_rate}</td>
                </tr>
                </tbody>
              </table>
          )
        }
      </div>
  )
}

export default Configurations
