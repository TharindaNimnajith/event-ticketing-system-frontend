import {useState} from 'react'

const Vendors = () => {
  const [vendors, setVendors] = useState([])
  const [error] = useState('')

  const addVendor = (e) => {
    e.preventDefault()
    const id = e.target.vendorId.value
    // Call API here, for now assume success
    setVendors([...vendors, {id}])
    e.target.reset()
  }

  return (
      <div>
        <h2 className='text-xl font-bold mb-4'>Vendors</h2>
        <form onSubmit={addVendor} className='mb-4'>
          <input type='text' name='vendorId' placeholder='Vendor ID' className='border p-2 mr-2'/>
          <button type='submit' className='bg-blue-500 text-white px-4 py-2'>
            Add
          </button>
        </form>
        {
            error && <p className='text-red-500'>{error}</p>
        }
        <table className='table-auto w-full'>
          <thead>
            <tr>
              <th className='border px-4 py-2'>ID</th>
            </tr>
          </thead>
          <tbody>
          {
            vendors.map(vendor => (
                <tr key={vendor.id}>
                  <td className='border px-4 py-2'>{vendor.id}</td>
                </tr>
            ))
          }
          </tbody>
        </table>
      </div>
  )
}

export default Vendors
