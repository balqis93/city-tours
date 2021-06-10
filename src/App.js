import React, { Component } from 'react';
import NavBar from "./component/NavBar/NavBar";
import './App.scss';
import TourList from './component/TourList';

class App extends Component {
  render() {
  return (
  <main>
  <NavBar />
  <TourList />
  </main>
  );
  
}
}

export default App;
