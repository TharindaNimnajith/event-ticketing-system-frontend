import {useState} from 'react'
import Sidebar from './component/Sidebar'
import {TAB_CONFIGURATIONS, TAB_CUSTOMERS, TAB_SIMULATION, TAB_TICKETS, TAB_VENDORS} from './config/config'
import Configurations from './page/Configurations'
import Customers from './page/Customers'
import Simulation from './page/Simulation'
import Tickets from './page/Tickets'
import Vendors from './page/Vendors'

const App = () => {
  const [currentTab, setCurrentTab] = useState(TAB_SIMULATION)

  const renderContent = () => {
    switch (currentTab) {
      case TAB_SIMULATION:
        return <Simulation/>
      case TAB_CONFIGURATIONS:
        return <Configurations/>
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
      <div className="flex">
        <Sidebar setTab={setCurrentTab}/>
        <div className="pt-16 p-4">
          {
            renderContent()
          }
        </div>
      </div>
  )
}

export default App
