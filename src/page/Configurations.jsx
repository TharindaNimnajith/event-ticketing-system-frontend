import axios from 'axios'
import {useEffect, useState} from 'react'
import ErrorAlert from '../component/ErrorAlert'
import Header from '../component/Header'
import Loading from '../component/Loading'
import {BASE_URL_LOCALHOST_V1} from '../config/config'

const Configurations = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`${BASE_URL_LOCALHOST_V1}configs`)
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
        <Header header="Configurations"/>
        {
          loading ? (
              <Loading/>
          ) : error ? (
              <ErrorAlert error={error}/>
          ) : (
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Configuration</th>
                    <th className="border px-4 py-2">Value</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="border px-4 py-2">Max Ticket Capacity</td>
                  <td className="border px-4 py-2">{data?.data?.max_ticket_capacity}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Total Tickets</td>
                  <td className="border px-4 py-2">{data?.data?.total_tickets}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Ticket Release Rate (In Seconds)</td>
                  <td className="border px-4 py-2">{data?.data?.ticket_release_rate}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Customer Retrieval Rate (In Seconds)</td>
                  <td className="border px-4 py-2">{data?.data?.customer_retrieval_rate}</td>
                </tr>
                </tbody>
              </table>
          )
        }
      </div>
  )
}

export default Configurations
