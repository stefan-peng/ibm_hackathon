import { connect } from "react-redux";
import UserList from "../components/UserList";
import { EmployeeCategories, EmployeeTypes } from "../const";
import {
  doEditUser,
  requestDeleteUser,
  requestFetchUsers
} from "../redux/actions";

// TODO: combine employeeType, siteLocation filters
const usersByEmployeeType = (users, filter) => {
  switch (filter) {
    case EmployeeTypes.INTERN:
  return users.filter(u => EmployeeCategories[u.TYPE].Type === EmployeeTypes.INTERN);
    case EmployeeTypes.HR:
      return users.filter(u => EmployeeCategories[u.TYPE].Type === EmployeeTypes.HR);
    case EmployeeTypes.MANAGER:
      return users.filter(u => EmployeeCategories[u.TYPE].Type === EmployeeTypes.MANAGER);
    default:
      return users;
  }
}

  const usersBySiteLocation = (users, filter) => {
    
  }

const mapStateToProps = state => ({
  users: getVisibleUsers(state.users.items, state.visibilityFilter),
  filter: state.visibilityFilter
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
  }
});

const VisibleUserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

export default VisibleUserList;
