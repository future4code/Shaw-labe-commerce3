import React from "react";

export class ShoppingCart extends React.Component {
  getTotalValue = () => {
    let totalValue = 0;

    for (let product of this.props.productsInCart) {
      totalValue += product.price * product.quantity;
    }

    return totalValue;
  };

  render() {
    return (
      <ShoppingCartContainer>
        <h3>Carrinho:</h3>
        <CartListContainer>
          {this.props.productsInCart.map((product) => {
            return <ShoppingCartItem cartItem={product} />;
          })}
        </CartListContainer>
        <p>Valor total: {this.getTotalValue()},00</p>
      </ShoppingCartContainer>
    );
  }
}


