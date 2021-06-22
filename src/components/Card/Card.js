import "./Card.css";
import logo from './Turkish-Airlines-Logo.jpg';

function Card(props) {
    const { isClickedR, isClickedS } = props
    const {origin, originName, price, stop, departDate, departTime, arrivalTime, arrivalDate, destination, destinationName} = props

 
  return (
   
    <section className="Card">
      <div className="Card-price">
        <img className="Card-company" alt="company" src={logo} />
        <button className="Card-buy">Купить за {isClickedR ? price : isClickedS ? Math.round(price/73) : Math.round(price/87)} {isClickedR ? "₽" : isClickedS ? "$": "€"}</button>
      </div>
      <div className="Card-box">
        <div className="Card-details">
          <h1 className="Card-time">{departTime}</h1>
          <p className="Card-city">{origin}, {originName}</p>
          <p className="Card-date">{departDate}</p>
        </div>
        <div className="Card-details">
          <p className="Card-stop">{stop} {stop === 0 ? 'пересадок': stop === 1 ? 'пересадка': 'пересадки'} </p>
        </div>
        <div className="Card-details">
          <h1 className="Card-time">{arrivalTime}</h1>
          <p className="Card-city">{destination}, {destinationName}</p>
          <p className="Card-date">{arrivalDate}</p>
        </div>
      </div>
    </section>
  );
}

export default Card;
