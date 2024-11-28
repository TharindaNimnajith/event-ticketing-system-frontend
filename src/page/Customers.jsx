import axios from 'axios'
import {useEffect, useState} from 'react'
import ErrorAlert from '../component/ErrorAlert'
import {BASE_URL_LOCALHOST_V1} from '../config/config'

const Customers = () => {
  const [customers, setCustomers] = useState([])
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
    .get(`${BASE_URL_LOCALHOST_V1}customers`)
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

  const addCustomer = e => {
    e.preventDefault()
    const id = e.target.customerId.value
    // Call API here, for now assume success
    setCustomers([...customers, {id}])
    e.target.reset()
  }

  return (
      <div>
        <h2 className="text-xl font-bold mb-4">Customers</h2>
        <form onSubmit={addCustomer} className="mb-4">
          <input type="text" name="customerId" placeholder="Customer Id" className="border p-2 mr-2"/>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            Add
          </button>
        </form>
        {
          loading ? (
              <div className="text-center">Loading...</div>
          ) : error ? (
              <ErrorAlert error={error}/>
          ) : (
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Customer Id</th>
                    <th className="border px-4 py-2">Retrieval Interval</th>
                  </tr>
                </thead>
                <tbody>
                {
                  data?.data?.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="text-center p-4">No customers available</td>
                      </tr>
                  ) : (
                      data?.data?.map(customer => (
                          <tr key={customer.id}>
                            <td className="border px-4 py-2">{customer.id}</td>
                            <td className="border px-4 py-2">{customer.retrieval_interval}</td>
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

export default Customers
