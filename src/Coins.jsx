import React from "react";

function Coins({ id, name, icon, price, rank, symbol }) {
  return (
    <div className="coin">
      <h1>Name: {name}</h1>
      <img src={icon} alt="" />
      <h1>Price: {price}</h1>
      <h1>Rank: {rank}</h1>
      <h1>Symbol: {symbol}</h1>
    </div>
  );
}

export default Coins;
