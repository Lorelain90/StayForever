import React from "react";
import Card from "./card";
import data from '../../public/pisos.json';

function CardList({ response }) {
  let data = [];
  if (response.data) {
    data = response.data.Search || [];
  }
  return (
    <div className="results">
      {data.map((data) => (
        <Card key={data.id} pisos={data} />
      ))}
    </div>
  );
}

export default CardList;