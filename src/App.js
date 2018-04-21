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


shuffleImages= id => {
    console.log(id);
    let clickedHeroIds = this.state.clickedHeroIds;

    if(clickedHeroIds.includes(id)){
        alert("you lose click to try again");
        const refreshCards =
        cards.map(c => {
            return c;

        })
        const shuffleImages = refreshCards.sort((a,b) => 0.5 - Math.random())
        this.setState({ cardsArr:shuffleImages, clickedHeroIds: [], score: 0, status: "Game Over! You Lost. Click to play again!"});
        return;
    }else{
        clickedHeroIds.push(id)
        console.log("click working");
        const shuffleImages = this.state.cardsArr.sort((a,b) => 0.5 - Math.random())
        this.setState({cardsArr: shuffleImages, score:this.state.score +1}) 
        

        if(clickedHeroIds.length === 20){
            this.setState({score: 20, status: "You Won! Great Job", clickedHeroIds: []});
            alert("You Win");
            return;
        }

        // const refreshCards =
        // cards.map(c => {
        //     return c;

        // })

        // for (let i = this.state.cardsArr.length -1; i> 0; i--) {
        //     let j = Math.floor(Math.random() * (i + 1));
        //     [this.state.cardsArr[i], this.state.cardsArr[j]] = [this.state.cardsArr[j], this.state.cardsArr[i]];
        // }
        
        this.setState({ cardsArr:shuffleImages, clickedHeroIds, score: clickedHeroIds.length, status: " " });
    }
}

// handleClick = () =>
//     {
//         console.log("click working");
//         const shuffleImages = this.state.cardsArr.sort((a,b) => 0.5 - Math.random())
//         this.setState({cardsArr: shuffleImages, score:this.state.score +1}) 

//         if (this.state.score === 20) {
//             alert("you won");
//         } else if (this.state.score > 20) {
//             console.log("you lose")
//         }
//     }
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
          shuffleImages={this.shuffleImages}


          />;
          </Wrapper>
      );
}
}

export default App;
