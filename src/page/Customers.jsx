import axios from 'axios'
import {useEffect, useState} from 'react'
import EmptyResultSet from '../component/EmptyResultSet'
import ErrorAlert from '../component/ErrorAlert'
import Header from '../component/Header'
import Loading from '../component/Loading'
import {BASE_URL_LOCALHOST_V1} from '../config/config'

const Customers = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [dataAdd, setDataAdd] = useState(null)
  const [errorAdd, setErrorAdd] = useState(null)

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
  }, [dataAdd])

  const addCustomer = event => {
    event.preventDefault()
    setErrorAdd(null)
    axios
    .post(`${BASE_URL_LOCALHOST_V1}customers`, {
      id: event.target.customerId.value
    })
    .then(response => {
      setDataAdd(response.data)
    })
    .catch(error => {
      setErrorAdd(error.response.data)
    })
    .finally(() => {
      event.target.reset()
    })
  }

  return (
      <div>
        <Header header="Customers"/>
        <form onSubmit={addCustomer} className="mb-4">
          <input type="text" name="customerId" placeholder="Customer Id" className="border p-2 mr-2"/>
          <button type="submit" className="rounded bg-blue-700 text-white px-4 py-2">
            Add Customer
          </button>
        </form>
        {
            errorAdd && <ErrorAlert error={errorAdd}/>
        }
        {
          loading ? (
              <Loading/>
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
                      <EmptyResultSet message="No customers available"/>
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
