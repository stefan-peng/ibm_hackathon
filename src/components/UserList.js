import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Button, CardColumns, ButtonToolbar } from "react-bootstrap";
import UserCard from "./UserCard";
import TypeSelector from "./TypeSelector";

const UserList = ({
  users,
  onEditClick,
  onDeleteClick,
  onRefreshClick,
  employeeTypes,
  selectedEmployeeType,
  siteLocations,
  selectedSiteLocation,
  setEmployeeTypeFilter,
  setSiteLocationFilter
}) => (
  <Fragment>
    <Button className="my-2" onClick={onRefreshClick}>
      Refresh
    </Button>
    <ButtonToolbar>
      <TypeSelector
        className="mr-2"
        types={employeeTypes}
        selected={selectedEmployeeType}
        onClick={setEmployeeTypeFilter}
      />
      <TypeSelector
        types={siteLocations}
        selected={selectedSiteLocation}
        onClick={setSiteLocationFilter}
      />
    </ButtonToolbar>
    {/* TODO: search users in user list */}
    <CardColumns>
      {users &&
        users.length > 0 &&
        users.map(user => (
          <UserCard
            key={user.ID}
            user={user}
            onEditClick={() => onEditClick(user.ID)}
            onDeleteClick={() => onDeleteClick(user.ID)}
            employeeTypes={employeeTypes}
            siteLocations={siteLocations}
          />
        ))}
    </CardColumns>
  </Fragment>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      ID: PropTypes.number,
      NAME: PropTypes.string,
      EMAIL: PropTypes.string,
      USERNAME: PropTypes.string,
      PHONENUMBER: PropTypes.string,
      EMPLOYEETYPE_ID: PropTypes.number,
      SITELOCATION_ID: PropTypes.number
    }).isRequired
  ),
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onRefreshClick: PropTypes.func.isRequired
};

export default UserList;
