import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import './navigationBar.css';

//TODO move styles
const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Driver Manager Exercise</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav style={{ padding: '.5rem 1rem', display: 'block' }}>
              <Link to="/driver">Cargar conductor</Link>
            </Nav>
          </Nav.Item>
          <Nav.Item>
            <Nav style={{ padding: '.5rem 1rem', display: 'block' }}>
              <Link style={{}} to="/drivers">
                Listado de conductores
              </Link>
            </Nav>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default NavigationBar;
