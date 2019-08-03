import React from 'react'
import { Dropdown } from 'react-bootstrap'

const DropdownItem = ({ children, onClick, filter }) => (
    <Dropdown.Item onClick={onClick.bind(this, children)}>{filter}</Dropdown.Item>
)

export default DropdownItem