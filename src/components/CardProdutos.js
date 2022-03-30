import React from 'react';
import styled from 'styled-components';
import imagem1 from '../Imagens/imagem1.jpg'





const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  border: 1px solid gray;
  width: 300px;
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


class Home extends React.Component {
    render() {
      return (
        <Container>
          <Card>
          <Imagem src={imagem1} />
            <p>Arandanos</p>
            <p>R$200,00</p>          
            <Boton>
              Adicionar ao carrinho
            </Boton>
          </Card>
          
        
        </Container>
      );
    }
  }
  export default Home;
  