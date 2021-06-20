import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import Data from './tickets.json';
import Search from './components/Search/Search';
class App extends React.Component {
  byfield(field){
    this.field = field
    return (a,b) => a[this.field] > b[this.field] ? 1 : -1;
  }
  render() { 
     return (
    <div className="App">
      <Search />
      <div className='App-box'>
        {  Data['tickets'].sort(this.byfield('price')).map((x, i) => {
          return (<Card 
            price = {x.price}
            stop = {x.stops}
            key = {i}
            origin = {x.origin}
            originName = {x.origin_name}
            destination = {x.destination}
            destinationName = {x.destination_name}
            departDate = {x.departure_date}
            departTime = {x.departure_time}
            arrivalDate = {x.arrival_date}
            arrivalTime = {x.arrival_time}  
          />)
        })}
    </div>
    </div>
  );
      }
      
}


export default App;
