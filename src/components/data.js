import React from "react";
import ReactDOM from "react-dom";
import data from './data'
import "./styles.css";

function Catalog() {
  return (
    <div className="catalog">
      <ul>
        {data.map(pisos => {
          return (
          <div>
          {pisos.id} {pisos.title}
          {pisos.img}
          {pisos.Precio}
          </div>
          )
        })}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Catalog />, rootElement);
