// import React, { Component } from 'react';
import React from "react";
// import logo from './logo.svg';
import './App.css';
// import Game from "./components/Game/Game";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Jumbo from "./components/Jumbo/Jumbo";
import Nav from "./components/Nav/Nav";
import CardsArrayDisplay from "./components/CardsArrayDisplay/CardsArrayDisplay";

const App = () => (
  <Wrapper>
  <Nav />
  <Title>Clicky Game</Title>
  <Jumbo />
  <CardsArrayDisplay/>;
  </Wrapper>
);


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
