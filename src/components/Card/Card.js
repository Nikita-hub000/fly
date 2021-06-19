import "./Card.css";

function Card(props) {
    const {price, stop} = props
  return (
    <section className="Card">
      <div className="Card-price">
        <img className="Card-company" alt="company" src="../Turkish-Airlines-Logo.jpg" />
        <button className="Card-buy">Купить за {price}</button>
      </div>
      <div className="Card-box">
        <div className="Card-details">
          <h1 className="Card-time">9:25</h1>
          <p className="Card-city">VVO, Владивосток</p>
          <p className="Card-date">DATA</p>
        </div>
        <div className="Card-details">
          <p className="Card-stop">{stop} пересадка</p>
        </div>
        <div className="Card-details">
          <h1 className="Card-time">9:25</h1>
          <p className="Card-city">VVO, Владивосток</p>
          <p className="Card-date">DATA</p>
        </div>
      </div>
    </section>
  );
}

export default Card;
