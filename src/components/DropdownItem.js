import React from 'react'
import { Dropdown } from 'react-bootstrap'

const DropdownItem = ({ children, onClick }) => (
    <Dropdown.Item onClick={onClick.bind(this, children)}>{children}</Dropdown.Item>
)

export default DropdownItem