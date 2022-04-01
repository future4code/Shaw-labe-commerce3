import React from "react";
import { ShoppingCart } from "./ShoppingCart";


export class ShoppingCartItem extends React.Component {
  render() {
    return (
      <ItemContainer>
        {/* <p>{this.props.cartItem.quantity}x</p>
        <p>{this.props.cartItem.name}</p> */}
        <button>Remover</button>
      </ItemContainer>
    );
  }
}

export default ShoppingCartItem;
