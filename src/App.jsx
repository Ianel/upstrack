import React from "react";
import Artists from "./components/Artists";
import Collections from "./components/Collections";
import Header from "./components/Header";
import MarketPlace from "./components/MarketPlace";
import Subscription from "./components/Subscription";

function App() {
  return (
    <div>
      <Header />
      <MarketPlace />
      <Subscription />
      <Collections />
      <Artists />
    </div>
  );
}

export default App;
