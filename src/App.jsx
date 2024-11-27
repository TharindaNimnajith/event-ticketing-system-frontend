import {useState} from 'react'
import Sidebar from './components/Sidebar'
import Customers from './components/Customers'
import Vendors from './components/Vendors'
import Tickets from './components/Tickets'
import Simulation from './components/Simulation'

const App = () => {
  const [currentTab, setCurrentTab] = useState('Simulation')

  const renderContent = () => {
    switch (currentTab) {
      case 'Simulation':
        return <Simulation/>
      case 'Vendors':
        return <Vendors/>
      case 'Customers':
        return <Customers/>
      case 'Tickets':
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
