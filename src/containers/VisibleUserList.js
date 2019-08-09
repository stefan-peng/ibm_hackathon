import { connect } from "react-redux";
import UserList from "../components/UserList";
import {
  doEditUser,
  doSetEmployeeTypeFilter,
  doSetSiteLocationFilter,
  requestDeleteUser,
  requestFetchAll
} from "../redux/actions";

// TODO: combine employeeType, siteLocation filters
const getVisibleUsers = (users, employeeTypeFilter, siteLocationFilter) =>
  users
    ? users.filter(
        u =>
          (employeeTypeFilter === 0 ||
            u.EMPLOYEETYPE_ID === employeeTypeFilter) &&
          (siteLocationFilter === 0 || u.SITELOCATION_ID === siteLocationFilter)
      )
    : users;

const mapStateToProps = state => ({
  users: getVisibleUsers(
    state.users.items,
    state.visibilityFilter.employeeTypeFilter,
    state.visibilityFilter.siteLocationFilter
  ),
  employeeTypes: state.employeeTypes.items,
  employeeTypesFetching: state.employeeTypes.isFetching,
  selectedEmployeeType: state.visibilityFilter.employeeTypeFilter,
  selectedSiteLocation: state.visibilityFilter.siteLocationFilter,
  siteLocations: state.siteLocations.items,
  siteLocationsFetching: state.siteLocations.isFetching,
  usersFetching: state.users.isFetching,
  notAdmin: !state.auth.isAdmin
});

const mapDispatchToProps = dispatch => ({
  onEditClick: id => {
    dispatch(doEditUser(id));
  },
  onDeleteClick: id => {
    dispatch(requestDeleteUser(id));
  },
  onRefreshClick: () => {
    dispatch(requestFetchAll());
  },
  setEmployeeTypeFilter: type => {
    dispatch(doSetEmployeeTypeFilter(type));
  },
  setSiteLocationFilter: type => {
    dispatch(doSetSiteLocationFilter(type));
  }
});

const VisibleUserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

export default VisibleUserList;
