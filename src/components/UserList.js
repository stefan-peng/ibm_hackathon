import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Button, CardColumns } from "react-bootstrap";
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
    <TypeSelector
      types={employeeTypes}
      selected={selectedEmployeeType}
      onClick={setEmployeeTypeFilter}
    />
    <TypeSelector
      types={siteLocations}
      selected={selectedSiteLocation}
      onClick={setSiteLocationFilter}
    />
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
      PHONENUMBER: PropTypes.number,
      EMPLOYEETYPE_ID: PropTypes.string,
      SITELOCATION_ID: PropTypes.number
    }).isRequired
  ),
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onRefreshClick: PropTypes.func.isRequired
};

export default UserList;
