import React from "react";
import { Dropdown } from "react-bootstrap";
import DropdownSelector from "./DropdownSelector";

const TypeSelector = ({ types, selected, onClick, isFetching }) =>
  !isFetching && types ? (
    <Dropdown className="my-2 mr-2">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selected === 0 && "All"}
        {Number.isInteger(selected) && selected > 0 ? types[selected].DATA : ""}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <DropdownSelector
          key="0"
          filter="All"
          onClick={onClick.bind(this, 0)}
        />
        {Object.keys(types).map(i => (
          <DropdownSelector
            key={types[i].ID}
            filter={types[i].DATA}
            onClick={onClick.bind(this, types[i].ID)}
          />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  ) : (
    <div>loading...</div>
  );

export default TypeSelector;
