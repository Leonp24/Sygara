import React from 'react';
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/logo.png';

const NavbarComponent = ({ isLoggedIn }) => {
    return (
        <Navbar expand="lg" className="mb-3">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='d-flex align-items-center'>
                        <Nav.Link href="/">Beranda</Nav.Link>
                        <Nav.Link href="/product">Produk</Nav.Link>
                        <div className="vr"></div>

                        {isLoggedIn ? (
                            <>
                                <Nav.Link href="/cart"><FontAwesomeIcon icon={faShoppingCart} className='text-success'></FontAwesomeIcon></Nav.Link>
                                <NavDropdown title="Username" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/">Keluar</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        ) : (
                            <>
                                <Nav.Link href="/login">
                                    <Button variant="outline-success">Masuk</Button>
                                </Nav.Link>
                                <Nav.Link href="/register">
                                    <Button variant="success">Daftar</Button>
                                </Nav.Link>
                            </>
                        )}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;