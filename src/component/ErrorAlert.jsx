import PropTypes from 'prop-types'

const ErrorAlert = ({error}) => (
    <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'>
      <p><strong>HTTP Status:</strong> {error.http_status}</p>
      <p><strong>Error Message:</strong> {error.message}</p>
      {
        error.errors && Array.isArray(error.errors) && error.errors.length > 0 ? (
            error.errors.map((err, index) => (
                <p key={`${err}-${index}`}>{err}</p>
            ))
        ) : null
      }
    </div>
)

ErrorAlert.propTypes = {
  error: PropTypes.shape({
    http_status: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    errors: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
}

export default ErrorAlert
