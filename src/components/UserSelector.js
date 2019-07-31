import React from 'react'
import { Dropdown } from 'react-bootstrap'
import DropdownFilter from './DropdownFilter'
import { VisibilityFilters } from '../redux/actions'

const UserSelector = () => (
    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            User Type
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <DropdownFilter filter={VisibilityFilters.SHOW_ALL}>All</DropdownFilter>
            <DropdownFilter filter={VisibilityFilters.SHOW_INTERNS}>Interns</DropdownFilter>
            <DropdownFilter filter={VisibilityFilters.SHOW_HR}>HR</DropdownFilter>
            <DropdownFilter filter={VisibilityFilters.SHOW_MANAGERS}>Managers</DropdownFilter>
        </Dropdown.Menu>
    </Dropdown>
)

export default UserSelector