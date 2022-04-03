import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  display: grid; 
   grid-template-columns: 1fr 1fr 1fr;
`;

// export const ContainerPai = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
//   width: 70%;
//   height: 100%;
// `;

// export const ContainerProdutos = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   width: 90%;
//   height: 80%;
//   gap: 10px;
// `;

// export const Textos = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-direction: row;
//   width: 90%;
// `;

// export const Ordenadores = styled.p`
//   display: flex;
//   justify-content: end;
//   flex-direction: row;
//   width: 90%;
// `;

export const ListContainer = styled.div`
    display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows:repeat(2,1fr);
  column-gap: 20px;
  row-gap: 20px;
`;
