import axios from 'axios'
import {useEffect, useState} from 'react'
import EmptyResultSet from '../component/EmptyResultSet'
import ErrorAlert from '../component/ErrorAlert'
import Header from '../component/Header'
import Loading from '../component/Loading'
import {BASE_URL_LOCALHOST_V1} from '../config/config'

const Vendors = () => {
  const [vendors, setVendors] = useState([])
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
    .get(`${BASE_URL_LOCALHOST_V1}vendors`)
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

  const addVendor = e => {
    e.preventDefault()
    const id = e.target.vendorId.value
    const ticketsPerRelease = e.target.ticketsPerRelease.value
    // Call API here, for now assume success
    setVendors([...vendors, {id}])
    e.target.reset()
  }

  return (
      <div>
        <Header header="Vendor"/>
        <form onSubmit={addVendor} className="mb-4">
          <input type="text" name="vendorId" placeholder="Vendor Id" className="border p-2 mr-2"/>
          <input type="text" name="ticketsPerRelease" placeholder="Tickets per Release" className="border p-2 mr-2"/>
          <button type="submit" className="rounded bg-blue-500 text-white px-4 py-2">
            Add
          </button>
        </form>
        {
          loading ? (
              <Loading/>
          ) : error ? (
              <ErrorAlert error={error}/>
          ) : (
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Vendor Id</th>
                    <th className="border px-4 py-2">Tickets per Release</th>
                    <th className="border px-4 py-2">Release Interval</th>
                    <th className="border px-4 py-2">Vendor Status</th>
                  </tr>
                </thead>
                <tbody>
                {
                  data?.data?.length === 0 ? (
                      <EmptyResultSet message="No vendors available"/>
                  ) : (
                      data?.data?.map(vendor => (
                          <tr key={vendor.id}>
                            <td className="border px-4 py-2">{vendor.id}</td>
                            <td className="border px-4 py-2">{vendor.tickets_per_release}</td>
                            <td className="border px-4 py-2">{vendor.release_interval}</td>
                            <td className="border px-4 py-2">{vendor.status}</td>
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

export default Vendors
