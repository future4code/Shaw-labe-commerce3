import React from 'react';
import styled from 'styled-components';
// import imagem1 from '../Imagens/imagem1.jpg'



const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  border: 1px solid gray; 
  width: 85%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const Imagem = styled.img `
   width: 100%;

`;

const Boton = styled.button`
`;


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