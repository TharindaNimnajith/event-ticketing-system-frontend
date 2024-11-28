import PropTypes from 'prop-types'

const InfoAlert = ({data}) => (
    <div className="rounded bg-green-100 border border-green-700 text-green-700 px-4 py-3 mb-4">
      <p><strong>HTTP Status:</strong> {data.http_status}</p>
      <p><strong>Message:</strong> {data.message}</p>
    </div>
)

InfoAlert.propTypes = {
  data: PropTypes.shape({
    http_status: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    data: PropTypes.object
  }).isRequired
}

export default InfoAlert
