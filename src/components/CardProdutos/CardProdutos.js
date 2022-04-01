import React from 'react';
import  { ContainerCard,Card,Imagem,Boton} from "./styles";
// import imagem1 from '../Imagens/imagem1.jpg'



function CardProdutos (props) {
    

      return (
        <ContainerCard>
          <Card>
            <Imagem src={props.imagemProduto} />
            <p>{props.nomeProduto}</p>  
            <p>{props.precoProduto}</p>          
            <Boton>
              Adicionar ao carrinho
            </Boton>
          </Card>
        </ContainerCard>
      );
    
  }
  export default CardProdutos;