import {useState} from 'react'
import Sidebar from './components/Sidebar'
import Customers from './tabs/Customers.jsx'
import Vendors from './tabs/Vendors.jsx'
import Tickets from './tabs/Tickets.jsx'
import Simulation from './tabs/Simulation.jsx'
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
