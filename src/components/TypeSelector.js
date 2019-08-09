import React from "react";
import { DropdownButton } from "react-bootstrap";
import DropdownSelector from "./DropdownSelector";

const TypeSelector = ({ types, selected, onClick, isFetching, disabled }) =>
  !isFetching && types ? (
    <DropdownButton
      disabled={disabled}
      id="dropdown-basic-button"
      className="my-2 mr-2"
      title={selected === 0 ? "All" : types[selected].DATA}
    >
      {/* <Dropdown disabled={disabled} className="my-2 mr-2">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      </Dropdown.Toggle>
      <Dropdown.Menu> */}
      <DropdownSelector key="0" filter="All" onClick={onClick.bind(this, 0)} />
      {Object.keys(types).map(i => (
        <DropdownSelector
          key={types[i].ID}
          filter={types[i].DATA}
          onClick={onClick.bind(this, types[i].ID)}
        />
      ))}
      {/* </Dropdown.Menu>
    </Dropdown> */}
    </DropdownButton>
  ) : (
    <div>loading...</div>
  );

export default TypeSelector;
