import './App.css';
import Card from './components/Card/Card';
import Data from './tickets.json';
function App() {
  console.log(Data['tickets'][0]['price'])
  const cycle = a => {a['tickets'].map(x => {
    <Card price={x.origin} stop={x.stops} />
  })}
  return (
    <div className="App">
      <div>{cycle(Data)}</div>
    </div>
  );
}

export default App;
