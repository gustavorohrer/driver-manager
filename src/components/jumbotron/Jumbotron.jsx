import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import image from '../../assets/img/driverImage.jpg';

//TODO move styles
const Styles = styled.div`
  .jumbo {
    background: url(${image}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay" />
      <Container>
        <h1>Driver Manager</h1>
      </Container>
    </Jumbo>
  </Styles>
);
export default Jumbotron;
