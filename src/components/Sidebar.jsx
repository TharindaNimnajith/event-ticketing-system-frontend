import PropTypes from 'prop-types'

const Sidebar = ({setTab}) => {
  const tabs = ['Customers', 'Vendors', 'Tickets', 'Configurations', 'Simulation']
  return (
      <div className='w-1/5 h-screen bg-gray-800 text-white flex flex-col'>
        {tabs.map((tab) => (
            <button key={tab} onClick={() => setTab(tab)} className='p-4 text-left hover:bg-gray-600'>
              {tab}
            </button>
        ))}
      </div>
  )
}

Sidebar.propTypes = {
  setTab: PropTypes.func.isRequired
}

export default Sidebar
