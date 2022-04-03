import React from "react";
import FilhoCarrinho from "./FilhoCarrinho";

import {
  PaiContainerCarrinho,
  ContainerCarrinho,
  TituloCarrinho,
  Element1,
  ResultadoCarrinho,
} from "./styles";

class Cart extends React.Component {
  render() {

  return (
    <PaiContainerCarrinho>
      <ContainerCarrinho>
        <TituloCarrinho>Carrinho:</TituloCarrinho>
        <Element1>
          
          {this.props.carrinho.map((produto) => {
            return <FilhoCarrinho
            produto = {produto}
            />
          })}

         
        </Element1>

        <ResultadoCarrinho>Valor total: R$70,00</ResultadoCarrinho>
      </ContainerCarrinho>
    </PaiContainerCarrinho>
    )
  } 
}
export default Cart;