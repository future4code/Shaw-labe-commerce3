import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: lavender;
  padding: 0 15px;
  border-radius: 5px;

  img {
    width: 100%;
  }
`;

export const CardFooter = styled.h4`
  grid-area: area1;
`;
