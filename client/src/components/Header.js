import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Navbar, NavbarBrand} from 'reactstrap';

const Header = () => {

    return (
        <div>
            <Navbar color="dark" light expand="md">
            <NavbarBrand color="blue" href="/">Home</NavbarBrand>
            </Navbar>
        </div>
    )
}

export default Header
