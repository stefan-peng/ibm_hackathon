import { connect } from 'react-redux'
import { doSetSiteLocationFilter } from '../redux/actions'
import DropdownItem from './DropdownItem'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
  filter: ownProps.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(doSetSiteLocationFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownItem)