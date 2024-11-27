import {useState} from 'react'

const Tickets = () => {
  const [tickets] = useState([])

  return (
      <div>
        <h2 className='text-xl font-bold mb-4'>Tickets</h2>
        <table className='table-auto w-full'>
          <thead>
            <tr>
              <th className='border px-4 py-2'>ID</th>
            </tr>
          </thead>
          <tbody>
          {
            tickets.map(ticket => (
                <tr key={ticket.id}>
                  <td className='border px-4 py-2'>{ticket.id}</td>
                </tr>
            ))
          }
          </tbody>
        </table>
      </div>
  )
}

export default Tickets
