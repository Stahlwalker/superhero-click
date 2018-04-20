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
    clickedHeroIds: [],
    cardsArr: cards,
    score: 0,
    highestScore: 0,
    status: ""
    };


// shuffleImages= id => {
//     let clickedHeroIds = this.state.clickedHeroIds;

//     if(clickedHeroIds.incluces(id)){
//         this.setState({ clickedHeroIds: [], score: 0, status: "Game Over! You Lost. Click to play again!"});
//         return;
//     }else{
//         clickedHeroIds.push(id)

//         if(clickedHeroIds.length === 20){
//             this.setState({score: 20, status: "You Won! Great Job", clickedHeroIds: []});
//             console.log("You Win");
//             return;
//         }

//         this.setState({ cards, clickedHeroIds, score: clickedHeroIds.length, status: " " });

//         for (let i = cards.length -1; i> 0; i--) {
//             let j = Math.floor(Math.random() * (i + 1));
//             [cards[i], cards[j]] = [cards[j], cards[i]];
//         }
//     }
// }

handleClick = () =>
    {
        console.log("click working");
        const shuffleImages = this.state.cardsArr.sort((a,b) => 0.5 - Math.random())
        this.setState({cardsArr: shuffleImages, score:this.state.score +1}) 

        if (this.state.score === 20) {
            alert("you won");
        } else if (this.state.score > 20) {
            console.log("you lose")
        }
    }
//add const game with if/else statments
// IncrementItem = () => {
//     this.setState({ score: this.state.score + 1 });
//   }


// resetGame = () => {
//     this.state.cardsArr.forEach((image) => {
//       image.clicked = false;
//     })
//     this.setState({ score: 0 })
//   } 

render(){
      return(
          <Wrapper>
          <Nav 
            score ={this.state.score}
            goal ={this.state.highestScore}
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

export default App;
