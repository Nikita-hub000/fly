import './Search.css';
function Search(props) {
  return (
    <section className="Search">
        <h1 className="Search-txt">Валюта</h1>
        <div className="Search-box">
            <button className="Search-btn">RUB</button> 
            <button className="Search-btn">USD</button>
            <button className="Search-btn">EUR</button>
        </div>
        <h1 className="Search-txt">Количество пересадок</h1>

    </section>
  );
}

export default Search;
