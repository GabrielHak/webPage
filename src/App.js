import React, { Fragment } from 'react';
import Footer from './components/Footer';
import Body from './components/Body';
import Header from './components/Header';
import Knowledge from './components/Knowledge';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

function App() {
  return (
    <Fragment>
      <Header/>
      <Body/>
      <Knowledge/>
      <Footer/>
    </Fragment>
  );
}

export default App;
