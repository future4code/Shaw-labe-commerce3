import React from "react";

import {
  PaiContainerCarrinho,
  ContainerCarrinho,
  TituloCarrinho,
  Element1,
  ResultadoCarrinho,
} from "./styles";

class FilhoCarrinho extends React.Component {
  render() {

  return (
        <div>
                    
            
             <p>{this.props.produto.nome}</p>
             <p>{this.props.produto.quantidade}</p>
             <button>Remover</button>
                

         
        </div>

       
    )
  } 
}
export default FilhoCarrinho;