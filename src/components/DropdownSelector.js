import { connect } from "react-redux";
import DropdownItem from "./DropdownItem";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
  filter: ownProps.filter
});

export default connect(mapStateToProps)(DropdownItem);
