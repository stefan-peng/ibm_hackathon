import React from 'react'
import { Dropdown } from 'react-bootstrap'
import DropdownItem from './DropdownItem'

const Dropdown = ({ title, items, onClick }) => (
    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            {title}
        </Dropdown.Toggle>
        <Dropdown.Menu>
            {items.map(item => {
                <DropdownItem onClick={onClick.bind(this, item)}>{item}</DropdownItem>
            })}
        </Dropdown.Menu>
    </Dropdown>
)

export default Dropdown