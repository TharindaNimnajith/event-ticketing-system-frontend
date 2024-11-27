import PropTypes from 'prop-types'
import {TABS} from './../config/config.js'

const Sidebar = ({setTab}) => {
  return (
      <div className='w-1/5 h-screen bg-gray-800 text-white flex flex-col'>
        {
          TABS.map((tab) => (
              <button key={tab} onClick={() => setTab(tab)} className='p-4 text-left hover:bg-gray-600'>
                {tab}
              </button>
          ))
        }
      </div>
  )
}

Sidebar.propTypes = {
  setTab: PropTypes.func.isRequired
}

export default Sidebar
