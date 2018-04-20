import React, { Component } from 'react';
// import React from "react";
// import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import Jumbo from "./components/Jumbo/Jumbo";
import Nav from "./components/Nav/Nav";
import CardsArrayDisplay from "./components/CardsArrayDisplay/CardsArrayDisplay";
import cards from "./components/Cards/Cards"

class App extends Component{
    state={
    cardsArr: cards,
    score: 0,
    goal: 21
    };

handleClick = () =>
    {
        console.log("click working");
        const shuffleImages = this.state.cardsArr.sort((a,b) => 0.5 - Math.random())
        this.setState({cardsArr: shuffleImages, score:this.state.score +1}) 
    }
//add const game with if/else statments
IncrementItem = () => {
    this.setState({ score: this.state.score + 1 });
  }

render(){
      return(
          <Wrapper>
          <Nav 
            score ={this.state.score}
            goal ={this.state.goal}
             />
          <Jumbo />
          <CardsArrayDisplay
          cardsArr ={this.state.cardsArr}
          handleClick={this.handleClick}
          />;
          </Wrapper>
      );
}
}
// const App = () => (
//   <Wrapper>
//   <Nav
//   score ={this.state.score}  
//    />
//   <Jumbo />
//   <CardsArrayDisplay/>;
//   </Wrapper>
// );

export default App;
