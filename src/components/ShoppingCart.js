import React from "react";
import CardProdutos from "./CardProdutos";
import styled from 'styled-components';

export const ShoppingCartContainer = styled.div`
  
`;

export const CartListContainer = styled.div`
  
`;

export const ShoppingCartItem = styled.div`
  
`;




export class ShoppingCart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      qty: 0
     };

      this.add = this.add.bild(this);
      this.remuve = this.remuve.bild(this);
    
      add(){
       this.setState({
         qty: this.state.qty + 1
        });
      }

     remove(){
      this.setState({
        qty: this.state.qty - 1
      });
    }

    render() {
      return (
        <div>
          <div className="#">
            <h3>aaaaaa</h3>

          </div>
        </div>
      )
    }
   
  }

}
   export default ShoppingCart;
 