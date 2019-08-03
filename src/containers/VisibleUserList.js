import { connect } from "react-redux";
import UserList from "../components/UserList";
import { EmployeeType_Ids, EmployeeTypes, VisibilityFilters } from "../const";
import {
  doEditUser,
  requestDeleteUser,
  requestFetchUsers
} from "../redux/actions";

// TODO: combine employeeType, siteLocation filters
const getVisibleUsers = (users, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_INTERNS:
      return users.filter(u => EmployeeTypes.INTERN.includes(u.TYPE));
    case VisibilityFilters.SHOW_HR:
      return users.filter(u => u.TYPE === EmployeeTypes.HR);
    case VisibilityFilters.SHOW_MANAGERS:
      return users.filter(u => u.TYPE === EmployeeTypes.MANAGER);
    default:
      return users;
  }
};

const mapStateToProps = state => ({
  users: getVisibleUsers(state.users["items"], state.visibilityFilter),
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
