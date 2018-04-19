// For each item in the cardsArray array...
import React, {Component} from "react";
import cards from "../Cards/Cards"
import './CardsArrayDisplay.css';



class CardsArrayDisplay extends Component{
state={
    cardsArr: cards,
    counter: 0
   };

handleClick = () =>
{
    console.log("click working");
    const shuffleImages = this.state.cardsArr.sort((a,b) => 0.5 - Math.random())
    this.setState({cardsArr: shuffleImages}) 

        // if (b){
        //     shuffleImages.forEach(cards=> cards.selected = false);
        //     this.setState({cardsArr: cards, counter: 0})
        // } else {
        //     shuffleImages.forEach((cards) => {
        //         if (card.name === name && cards.selected === false) {
        //             card.selected = true;
        //             this.setState({cardsArr: cards, counter: this.state.counter + 1})
        //         }
        //     });
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
