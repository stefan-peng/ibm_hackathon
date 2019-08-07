import { connect } from "react-redux";
import UserList from "../components/UserList";
import { EmployeeTypes } from "../const";
import {
  doEditUser,
  requestDeleteUser,
  requestFetchUsers,
  doSetSiteLocationFilter,
  doSetEmployeeTypeFilter
} from "../redux/actions";

// TODO: combine employeeType, siteLocation filters
const getVisibleUsers = (users, employeeTypeFilter, siteLocationFilter) =>
  users
    ? users.filter(
        u =>
          u.EMPLOYEETYPE_ID === employeeTypeFilter &&
          u.SITELOCATION_ID === siteLocationFilter
      )
    : users;
// switch (filter) {
//   case EmployeeTypes.INTERN:
//     return users.filter(u =>
//       employeeTypes[u.EMPLOYEETYPE_ID].DATA.includes("Intern")
//     );
//   case EmployeeTypes.HR:
//     return users.filter(u =>
//       employeeTypes[u.EMPLOYEETYPE_ID].DATA.includes("HR")
//     );
//   case EmployeeTypes.MANAGER:
//     return users.filter(u =>
//       employeeTypes[u.EMPLOYEETYPE_ID].DATA.includes("Manager")
//     );
//   default:
//     return users;
// }

const mapStateToProps = state => ({
  users: getVisibleUsers(
    state.users.items,
    state.visibilityFilter.employeeTypeFilter,
    state.visibilityFilter.siteLocationFilter
  ),
  employeeTypes: state.employeeTypes.items,
  selectedEmployeeType: state.visibilityFilter.employeeTypeFilter,
  siteLocations: state.siteLocations.items,
  selectedSiteLocation: state.visibilityFilter.siteLocationFilter
});

const mapDispatchToProps = dispatch => ({
  onEditClick: id => {
    dispatch(doEditUser(id));
  },
  onDeleteClick: id => {
    dispatch(requestDeleteUser(id));
  },
  onRefreshClick: () => {
    dispatch(requestFetchUsers());
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
