import {useState} from 'react'
import Sidebar from './component/Sidebar'
import Customers from './page/Customers.jsx'
import Vendors from './page/Vendors.jsx'
import Tickets from './page/Tickets.jsx'
import Simulation from './page/Simulation.jsx'
import {TAB_CUSTOMERS, TAB_SIMULATION, TAB_TICKETS, TAB_VENDORS} from './config/config.js'

const App = () => {
  const [currentTab, setCurrentTab] = useState(TAB_SIMULATION)

  const renderContent = () => {
    switch (currentTab) {
      case TAB_SIMULATION:
        return <Simulation/>
      case TAB_VENDORS:
        return <Vendors/>
      case TAB_CUSTOMERS:
        return <Customers/>
      case TAB_TICKETS:
        return <Tickets/>
      default:
        return null
    }
  }

  return (
      <div className='flex'>
        <Sidebar setTab={setCurrentTab}/>
        <div className='w-4/5 p-4'>
          {
            renderContent()
          }
        </div>
      </div>
  )
}

export default App
