import React from "react";
import "./App.css";
import Home from "./components/Home";
import Filter from "./components/Filter/Filter";

function App() {
  state = {
    minFilter: "",
    maxFilter: "",
    nameFilter: "",
    productsInCart: [],
  };
  return (
    <div>
      <Filter />
      <Home />

      {/* <AppContainer>
<Filters
 minFilter={this.state.minFilter} 
 maxFilter={this.state.maxFilter} 
 nameFilter={this.state.nameFilter} 
 />
<ShoppingCart productsInCart={this.states} />
</AppContainer>  */}
    </div>
  );
}

export default App;
