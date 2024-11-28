import PropTypes from 'prop-types'

const ErrorAlert = ({error}) => (
    <div className="rounded bg-red-100 border border-red-700 text-red-700 px-4 py-3 mb-4">
      <p><strong>HTTP Status:</strong> {error.http_status}</p>
      <p><strong>Message:</strong> {error.message}</p>
      {
        error.errors && Array.isArray(error.errors) && error.errors.length > 0 ? (
            <>
              <br/>
              <p><strong>Errors:</strong></p>
              {
                error.errors.map((error, index) => (
                    <p key={`${error}-${index}`}>{error}</p>
                ))
              }
            </>
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
