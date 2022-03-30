import React from "react";
import "./css";

class App extends React.Component {
  state = {
    minFilter: "",
    maxFilter: "",
    nameFilter:"",
    productsInCart: []
  };

  render() {
    return (
      <AppContainer>
        <Filters
         minFilter={this.state.minFilter} 
         maxFilter={this.state.maxFilter} 
         nameFilter={this.state.nameFilter} 
         />
        <ShoppingCart productsInCart={this.states} />
      </AppContainer>
    );
  }
}

export default App;
