import React from "react";
import Artists from "./components/Artists";
import Banner from "./components/Banner";
import Collections from "./components/Collections";
import Header from "./components/Header";
import MarketPlace from "./components/MarketPlace";
import Navbar from "./components/Navbar";
import Subscription from "./components/Subscription";

function App() {
  return (
    <div>
      <Header />
      <MarketPlace />
      <Subscription />
      <Collections />
      <Artists />
      <Banner />
      <Navbar type="Bottom" />
    </div>
  );
}

export default App;
