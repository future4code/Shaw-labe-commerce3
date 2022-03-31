import React from "react";
import * as S from './styles'

class Filter extends React.Component {
 

  render() {
    return (
      <S.FilterContainer>
        <h3>Filtro</h3>
        <S.InputContainer>
        Valor Mínimo:
        <input type="number" 
        value={this.props.minFilter}
        onChange={this.props.onChangeMinFilter}
        />
        </S.InputContainer>

        <S.InputContainer>
        Valor Máximo:
        <input type="number" 
        value={this.props.maxFilter}
        onChange={this.props.onChangeMaxFilter}
        />
        </S.InputContainer>

        <S.InputContainer>
        Busca por Nome:
        <input type="text" 
        value={this.props.nameFilter}
        onChange={this.props.onChangeNameFilter}
        />
        </S.InputContainer>
      </S.FilterContainer>
    );
  }
}

export default Filter;
