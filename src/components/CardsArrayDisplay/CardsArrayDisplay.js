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
