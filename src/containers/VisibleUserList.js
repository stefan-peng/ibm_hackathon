import { connect } from "react-redux";
import UserList from "../components/UserList";
import { EmployeeTypes } from "../const";
import {
  doEditUser,
  requestDeleteUser,
  requestFetchUsers
} from "../redux/actions";

// TODO: combine employeeType, siteLocation filters
const usersByEmployeeType = (users, employeeTypes, filter) => {
  switch (filter) {
    case EmployeeTypes.INTERN:
      return users.filter(u => 
        employeeTypes[u.EMPLOYEETYPE_ID].DATA.includes("Intern")
      );
    case EmployeeTypes.HR:
      return users.filter(u =>
        employeeTypes[u.EMPLOYEETYPE_ID].DATA.includes("HR")
      );
    case EmployeeTypes.MANAGER:
      return users.filter(u =>
        employeeTypes[u.EMPLOYEETYPE_ID].DATA.includes("Manager")
      );
    default:
      return users;
  }
};

const mapStateToProps = state => ({
  users: usersByEmployeeType(
    state.users.items,
    state.employeeTypes.items,
    state.visibilityFilter
  ),
  employeeTypes: state.employeeTypes.items,
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
