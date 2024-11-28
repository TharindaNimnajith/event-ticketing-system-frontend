import {useState} from 'react'

const Customers = () => {
  const [customers, setCustomers] = useState([])
  const [error] = useState('')

  const addCustomer = (e) => {
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
          <input type="text" name="customerId" placeholder="Customer ID" className="border p-2 mr-2"/>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            Add
          </button>
        </form>
        {
            error && <p className="text-red-500">{error}</p>
        }
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
            </tr>
          </thead>
          <tbody>
          {
            customers.map(customer => (
                <tr key={customer.id}>
                  <td className="border px-4 py-2">{customer.id}</td>
                </tr>
            ))
          }
          </tbody>
        </table>
      </div>
  )
}

export default Customers
