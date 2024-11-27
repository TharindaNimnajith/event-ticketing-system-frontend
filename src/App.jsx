import {useState} from 'react'
import Sidebar from './components/Sidebar'
import Customers from './components/Customers'
import Vendors from './components/Vendors'
import Tickets from './components/Tickets'
import Configurations from './components/Configurations'
import Simulation from './components/Simulation'

const App = () => {
  const [currentTab, setCurrentTab] = useState('Simulation')

  const renderContent = () => {
    switch (currentTab) {
      case 'Customers':
        return <Customers/>
      case 'Vendors':
        return <Vendors/>
      case 'Tickets':
        return <Tickets/>
      case 'Configurations':
        return <Configurations/>
      case 'Simulation':
        return <Simulation/>
      default:
        return <Simulation/>
    }
  }

  return (
      <div className='flex'>
        <Sidebar setTab={setCurrentTab}/>
        <div className='w-4/5 p-4'>{renderContent()}</div>
      </div>
  )
}

export default App
