import React, { Fragment } from 'react';
import Footer from './components/Footer';
import Body from './components/Body';
import Header from './components/Header';
import Knowledge from './components/Knowledge';
import Contact from './components/Contact';

function App() {
  const height = document.querySelector('#header');
  console.log(height);
  return (
    <Fragment>
      <Header/>
      <Body/>
      <Knowledge/>
      <hr></hr>
      <Contact/>
      <Footer/>
    </Fragment>
  );
}

export default App;
