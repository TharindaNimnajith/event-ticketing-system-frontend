import axios from 'axios'
import {useEffect, useState} from 'react'
import ErrorAlert from '../component/ErrorAlert'
import {BASE_URL_LOCALHOST_V1} from '../config/config'

const Tickets = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
    .get(`${BASE_URL_LOCALHOST_V1}tickets`)
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
        <h2 className="text-xl font-bold mb-4">Tickets</h2>

        {
          loading ? (
              <div className="text-center">Loading...</div>
          ) : error ? (
              <ErrorAlert error={error}/>
          ) : (
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Ticket Id</th>
                    <th className="border px-4 py-2">Vendor Id</th>
                    <th className="border px-4 py-2">Customer Id</th>
                    <th className="border px-4 py-2">Ticket Status</th>
                  </tr>
                </thead>
                <tbody>
                {
                  data?.data?.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="text-center p-4">No tickets available</td>
                      </tr>
                  ) : (
                      data?.data?.map(ticket => (
                          <tr key={ticket.id}>
                            <td className="border px-4 py-2">{ticket.id}</td>
                            <td className="border px-4 py-2">{ticket.vendor_id}</td>
                            <td className="border px-4 py-2">{ticket.customer_id != null ? ticket.customer_id : 'N/A'}</td>
                            <td className="border px-4 py-2">{ticket.status}</td>
                          </tr>
                      ))
                  )
                }
                </tbody>
              </table>
          )
        }
      </div>
  )
}

export default Tickets
