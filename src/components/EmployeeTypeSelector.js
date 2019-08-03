import React from "react";
import { Dropdown } from "react-bootstrap";
import { AllEmployeeTypes } from "../const";
import DropdownItem from "./DropdownItem";

const EmployeeTypeSelector = ({ selected, onClick, type }) => (
  <Dropdown className="mt-2">
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      {selected}
    </Dropdown.Toggle>
    <Dropdown.Menu>
      {AllEmployeeTypes.map(type => (
        <Dropdown.Item onClick={onClick}>{type}</Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
);

export default EmployeeTypeSelector;
