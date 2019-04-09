import React from 'react';
import NavBar from '../components/NavBar.js';
import { Container } from 'reactstrap';

const WrapperPage = ({ children }) => {
  return (
    <Container>
      <NavBar/>
      {children}
    </Container>
  );
}

export default WrapperPage;
