import React from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Data from "./tickets.json";
import Search from "./components/Search/Search";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isClickedR: true,
      isClickedE: false,
      isClickedS: false,
      isAll: true,
      isOne: false,
      isZero: false,
      isTwo: false,
      isThree: false,
    };
  }
  updateButton = (R, S, E) => {
    this.setState({ isClickedR: R, isClickedE: E, isClickedS: S });
  };

  updateCheckbox = () => {
    this.setState({
      isAll: document.querySelectorAll(".Search-check")[0].checked,
      isZero: document.querySelectorAll(".Search-check")[1].checked,
      isOne: document.querySelectorAll(".Search-check")[2].checked,
      isTwo: document.querySelectorAll(".Search-check")[3].checked,
      isThree: document.querySelectorAll(".Search-check")[4].checked,
    });
    
  };

  renderState = () =>{
    return {
      stops: [
      this.state.isZero ? 0 : 'x', 
      this.state.isOne ? 1 : 'x',
      this.state.isTwo ? 2 : 'x' ,
      this.state.isThree ? 3 : 'x']
    }
  }

  findStops(array, filters){
      if(this.state.isAll){
        return Data['tickets']
      }
        return array.filter(elem => {
          return Object.values(filters)[0].includes(elem.stops) ? elem : false;
      });
     
      
  }

  byfield(field) {
    this.field = field;
    return (a, b) => (a[this.field] > b[this.field] ? 1 : -1);
  }

  render() {
    return (
      <div className="App">
        <Search
          isClickedR={this.state.isClickedR}
          isClickedE={this.state.isClickedE}
          isClickedS={this.state.isClickedS}
          updateButton={this.updateButton}
          isAll={this.state.isAll}
          isOne={this.state.isOne}
          isZero={this.state.isZero}
          isTwo={this.state.isTwo}
          isThree={this.state.isThree}
          updateCheckbox={this.updateCheckbox}
        />
        <div className="App-box">
          {this.findStops(Data['tickets'], this.renderState()).sort(this.byfield("price")).map((x, i) => {
            return (
              <Card
                price={x.price}
                stop={x.stops}
                key={i}
                origin={x.origin}
                originName={x.origin_name}
                destination={x.destination}
                destinationName={x.destination_name}
                departDate={x.departure_date}
                departTime={x.departure_time}
                arrivalDate={x.arrival_date}
                arrivalTime={x.arrival_time}
                isClickedR={this.state.isClickedR}
                isClickedE={this.state.isClickedE}
                isClickedS={this.state.isClickedS}

              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
