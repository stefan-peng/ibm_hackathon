import React from "react";
import { Dropdown } from "react-bootstrap";
import { VisibilityFilters } from "../const";
import DropdownFilter from "./DropdownFilter";

const EmployeeTypeFilterSelector = ({ selected }) => (
  <Dropdown className="mt-2">
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      {selected}
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <DropdownFilter filter={VisibilityFilters.SHOW_ALL} />
      <DropdownFilter filter={VisibilityFilters.SHOW_INTERNS} />
      <DropdownFilter filter={VisibilityFilters.SHOW_HR} />
      <DropdownFilter filter={VisibilityFilters.SHOW_MANAGERS} />
    </Dropdown.Menu>
  </Dropdown>
);

export default EmployeeTypeFilterSelector;
