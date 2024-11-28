import PropTypes from 'prop-types'

const EmptyResultSet = ({message}) => (
    <tr>
      <td colSpan="4" className="text-center p-4">{message}</td>
    </tr>
)

EmptyResultSet.propTypes = {
  message: PropTypes.string.isRequired
}

export default EmptyResultSet
