import React from "react";
import { Dropdown } from "react-bootstrap";
import { EmployeeTypes } from "../const";
import DropdownFilter from "./EmployeeTypeDropdownFilter";

const EmployeeTypeFilterSelector = ({ selected }) => (
  <Dropdown className="mt-2">
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      {selected}
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <DropdownFilter filter={EmployeeTypes.ALL} />
      <DropdownFilter filter={EmployeeTypes.INTERN} />
      <DropdownFilter filter={EmployeeTypes.HR} />
      <DropdownFilter filter={EmployeeTypes.MANAGER} />
    </Dropdown.Menu>
  </Dropdown>
);

export default EmployeeTypeFilterSelector;
