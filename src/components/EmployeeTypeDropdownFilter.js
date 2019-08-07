import { connect } from 'react-redux'
import { doSetEmployeeTypeFilter } from '../redux/actions'
import DropdownItem from './DropdownItem'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter.employeeType,
  filter: ownProps.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(doSetEmployeeTypeFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownItem)