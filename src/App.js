import React, { Fragment } from 'react';
import Footer from './components/Footer';
import Body from './components/Body';
import Header from './components/Header';
import Knowledge from './components/Knowledge';

function App() {
  const height = document.querySelector('#header');
  console.log(height);
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
