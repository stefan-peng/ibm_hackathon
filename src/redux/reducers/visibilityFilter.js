import { EmployeeTypes } from "../../const";

// const initialState = {
//   employeeTypeFilter: EmployeeTypes.ALL
// };

const visibilityFilter = (state = EmployeeTypes.ALL, action) => {
  switch (action.type) {
    case "DO_SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
