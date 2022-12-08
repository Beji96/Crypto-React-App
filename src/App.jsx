import { useState, useEffect } from "react";
import Axios from "axios";

import "./App.css";
import Coins from "./Coins";

//"https://api.coinstats.app/public/v1/coins?skip=0"

function App() {
  const [showCoins, setShowCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (res) => {
        setShowCoins(res.data.coins);
        console.log(res.data);
      }
    );
  }, []);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <div className="cryptoHeader">
        <input type="text" placeholder="Bitcoin..." onChange={handleSearch} />
      </div>
      <div className="cryptoDisplay">
        {showCoins
          .filter((items) => {
            return search.toLocaleLowerCase === ""
              ? items
              : items.name.toLocaleLowerCase().includes(search);
          })
          .map((items) => {
            return (
              <Coins
                key={items.id}
                name={items.name}
                icon={items.icon}
                price={items.price}
                rank={items.rank}
                symbol={items.symbol}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
