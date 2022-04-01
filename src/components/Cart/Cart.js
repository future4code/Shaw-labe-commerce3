import React from "react";
import {
  PaiContainerCarrinho,
  ContainerCarrinho,
  TituloCarrinho,
  Element1,
  ResultadoCarrinho,
} from "./styles";

function Cart() {
  return (
    <PaiContainerCarrinho>
      <ContainerCarrinho>
        <TituloCarrinho>Carrinho:</TituloCarrinho>
        <Element1>
          <div> cantidad </div>
          <div> produto 1</div>
          <button>Remover</button>
        </Element1>

        <Element1>
          <div>cantidad</div>
          <div>produto 1</div>
          <button>Remover</button>
        </Element1>

        <ResultadoCarrinho>Valor total: R$70,00</ResultadoCarrinho>
      </ContainerCarrinho>
    </PaiContainerCarrinho>
  );
}

export default Cart;
