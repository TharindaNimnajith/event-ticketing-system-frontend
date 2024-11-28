import PropTypes from 'prop-types'
import {TABS} from '../config/config'

const Sidebar = ({setTab}) => {
  return (
      <div className="fixed top-0 left-0 w-full bg-gray-800 text-white flex justify-center items-center h-16">
        <div className="flex space-x-4">
          {
            TABS.map((tab) => (
                <button key={tab} onClick={() => setTab(tab)} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm font-medium">
                  {tab}
                </button>
            ))
          }
        </div>
      </div>
  )
}

Sidebar.propTypes = {
  setTab: PropTypes.func.isRequired
}

export default Sidebar
