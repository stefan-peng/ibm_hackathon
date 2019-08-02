import { connect } from 'react-redux'
import { doSetVisibilityFilter } from '../redux/actions'
import DropdownItem from './DropdownItem'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(doSetVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownItem)