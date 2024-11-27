import PropTypes from 'prop-types'

const ErrorAlert = ({errors}) => (
    <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'>
      {errors.map((error, index) => <p key={index}>{error}</p>)}
    </div>
)

ErrorAlert.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ErrorAlert
