// For each item in the cardsArray array...
import React, {Component} from "react";
import cards from "../Cards/Cards"
import './CardsArrayDisplay.css';



class CardsArrayDisplay extends Component{
state={
    cardsArr: cards
   };

handleClick = () =>
{
    console.log("click working");
    const shuffleImages = this.state.cardsArr.sort((a,b) => 0.5 - Math.random())
    this.setState({cardsArr: shuffleImages}) 

    // let score = this.state.clickedHeroIDs;
    // if(clickedHeroIDs.includes(id)){
    //     this.setState({ clickedHeroIDs: [], score: 0, status:  "Game Over! You lost. Click to play again!" });
    //     return;
    //   }else{
    //     clickedHeroIDs.push(id)
  
    //     if(clickedHeroIDs.length === 9){
    //       this.setState({score: 9, status: "You Won! Great Job, Smartie! Click to play again!", clickedPuppyIds: []});
    //       console.log('You Win');
    //       return;
    //     }
  
    //     this.setState({ cardsArr, clickedHeroIDs, score: clickedHeroIDs.length, status: " " });
  
    //     for (let i = cardsArr.length - 1; i > 0; i--) {
    //       let j = Math.floor(Math.random() * (i + 1));
    //       [cardsArr[i], cardsArr[j]] = [cardsArr[j], cardsArr[i]];
    //     }
    // }

}

    render(){
        console.log(this.state.cardsArr)
        return(
            <div>{this.state.cardsArr.map(card=>(
              <img onClick={this.handleClick} src={require(`../Cards/Images/${card.img}`)} alt="pic"/>
                ))} 
                </div>
        )
    }

}

  export default CardsArrayDisplay;
