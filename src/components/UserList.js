import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Button, CardColumns, ButtonToolbar } from "react-bootstrap";
import UserCard from "./UserCard";
import ModalAddUser from "./ModalAddUser";
import TypeSelector from "./TypeSelector";

const UserList = ({
  employeeTypes,
  employeeTypesFetching,
  onDeleteClick,
  notAdmin,
  onRefreshClick,
  selectedEmployeeType,
  selectedSiteLocation,
  setEmployeeTypeFilter,
  setSiteLocationFilter,
  siteLocations,
  siteLocationsFetching,
  users,
  usersFetching
}) => {
  const [show, setShow] = useState(false);

  const newUser = {
    NAME: "",
    EMAIL: "",
    PHONENUMBER: "",
    EMPLOYEETYPE_ID: 1,
    SITELOCATION_ID: 1
  };

  const [user, setUser] = useState(newUser);

  const handleClose = () => {
    setUser(newUser);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <ButtonToolbar>
        <Button className="my-2 mr-2" onClick={onRefreshClick}>
          Refresh
        </Button>
        {!notAdmin && <Button className="my-2 mr-2" onClick={handleShow}>
          Add user
        </Button>}
        <TypeSelector
          types={employeeTypes}
          selected={selectedEmployeeType}
          onClick={setEmployeeTypeFilter}
          isFetching={employeeTypesFetching}
        />
        <TypeSelector
          types={siteLocations}
          selected={selectedSiteLocation}
          onClick={setSiteLocationFilter}
          isFetching={siteLocationsFetching}
        />
      </ButtonToolbar>
      {/* TODO: search users in user list */}
      <ModalAddUser
        show={show}
        onHide={handleClose}
        user={user}
        notAdmin={notAdmin}
      />
      <CardColumns>
        {!usersFetching &&
          users.length > 0 &&
          users.map(u => (
            <UserCard
              key={u.ID}
              user={u}
              onEditClick={() => {
                setUser(u);
                handleShow();
              }}
              onDeleteClick={() => onDeleteClick(u.ID)}
              employeeTypes={employeeTypes}
              employeeTypesFetching={employeeTypesFetching}
              siteLocations={siteLocations}
              siteLocationsFetching={siteLocationsFetching}
            />
          ))}
      </CardColumns>
    </Fragment>
  );
};

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
