import React from "react";
import "./Search.css";
class Search extends React.Component {
  updateCheckbox = (e) => {
    let obj = {
      1: document.querySelectorAll(".Search-check")[0].checked,
      2: document.querySelectorAll(".Search-check")[1].checked,
      3: document.querySelectorAll(".Search-check")[2].checked,
      4: document.querySelectorAll(".Search-check")[3].checked,
      5: document.querySelectorAll(".Search-check")[4].checked,
    };
    console.log(obj);
  };
  render() {
    return (
      <section className="Search">
        <h1 className="Search-txt">Валюта</h1>
        <div className="Search-box">
          <button
            className={`Search-btn ${
              this.props.isClickedR ? "Search-btn_isPress" : ""
            }`}
            onClick={() =>
              this.props.updateButton(!this.props.isClickedR, false, false)
            }
            disabled={this.props.isClickedR ? "disabled" : ""}
          >
            RUB
          </button>
          <button
            className={`Search-btn ${
              this.props.isClickedS ? "Search-btn_isPress" : ""
            }`}
            onClick={() =>
              this.props.updateButton(false, !this.props.isClickedS, false)
            }
            disabled={this.props.isClickedS ? "disabled" : ""}
          >
            USD
          </button>
          <button
            className={`Search-btn ${
              this.props.isClickedE ? "Search-btn_isPress" : ""
            }`}
            onClick={() =>
              this.props.updateButton(false, false, !this.props.isClickedE)
            }
            disabled={this.props.isClickedE ? "disabled" : ""}
          >
            EUR
          </button>
        </div>
        <h1 className="Search-txt">Количество пересадок</h1>
        <div className="Search-container">
          <input
            className="Search-check"
            onChange={() => this.props.updateCheckbox()}
            type="checkbox"
            id="1"
      
          />
          <label className="Search-txt" for="1">
            Все
          </label>
          <p className="Search-hide">только</p>
        </div>
        <div className="Search-container">
          <input
            className="Search-check"
            onChange={() => this.props.updateCheckbox()}
            type="checkbox"
            id="2"
          />
          <label className="Search-txt" for="2">
            Без пересадок
          </label>
          <p className="Search-hide">только</p>
        </div>
        <div className="Search-container">
          <input
            className="Search-check"
            type="checkbox"
            id="3"
            onChange={() => this.props.updateCheckbox()}
          />
          <label className="Search-txt" for="3">
            1 пересадка
          </label>
          <p className="Search-hide">только</p>
        </div>
        <div className="Search-container">
          <input
            className="Search-check"
            type="checkbox"
            id="4"
            onChange={() => this.props.updateCheckbox()}
          />
          <label className="Search-txt" for="4">
            2 пересадки
          </label>
          <p className="Search-hide">только</p>
        </div>
        <div className="Search-container">
          <input
            className="Search-check"
            type="checkbox"
            id="5"
            onChange={() => this.props.updateCheckbox()}
          />
          <label className="Search-txt" for="5">
            3 пересадки
          </label>
          <p className="Search-hide">только</p>
        </div>
      </section>
    );
  }
}

export default Search;
