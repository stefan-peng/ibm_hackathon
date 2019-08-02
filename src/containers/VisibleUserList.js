import { connect } from "react-redux";
import UserList from "../components/UserList";
import { EmployeeType_Ids } from "../const";
import { doEditUser, requestDeleteUser, requestFetchUsers } from "../redux/actions";

const getVisibleUsers = (users, filter) => {
  switch (filter) {
    case "SHOW_INTERNS":
      return users.filter(
        u =>
          u.EMPLOYEETYPE_ID !== EmployeeType_Ids.HR &&
          u.EMPLOYEETYPE_ID !== EmployeeType_Ids.MANAGER
      );
    case "SHOW_HR":
      return users.filter(u => u.EMPLOYEETYPE_ID === EmployeeType_Ids.HR);
    case "SHOW_MANAGERS":
      return users.filter(u => u.EMPLOYEETYPE_ID === EmployeeType_Ids.MANAGER);
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
