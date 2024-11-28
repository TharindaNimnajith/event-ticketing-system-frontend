import PropTypes from 'prop-types'

const Header = ({header}) => (
    <h2 className="text-xl font-bold mb-4">{header}</h2>
)

Header.propTypes = {
  header: PropTypes.string.isRequired
}

export default Header
