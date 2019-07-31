import { connect } from 'react-redux'
import { setVisibilityFilter } from '../redux/actions'
import DropdownItem from './DropdownItem'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownItem)