import PropTypes from 'prop-types'
import {TABS} from './../config/config'

const Sidebar = ({setTab}) => {
  return (
      <div className="fixed top-0 left-0 w-full bg-gray-800 text-white flex justify-evenly items-center h-16">
        {
          TABS.map((tab) => (
              <button key={tab} onClick={() => setTab(tab)} className="p-4 text-left hover:bg-gray-600">
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
