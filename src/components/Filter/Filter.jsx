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


        <span>
         <label htmlFor="sort">Ordenação: </label>
         <select
            name="sort"
            value={this.props.sortingParameter}
            onChange={this.props.updateSortingParameter}
         >
            <option value="title">Título</option>
            <option value="price">Preço</option>
            <option value="dueDate">Prazo</option>
         </select>
      </span>

      {/* <select
         name="order"
        //  value={props.order}
        //  onChange={props.updateOrder}
      >
         <option value={1}>Crescente</option>
         <option value={-1}>Decrescente</option>

      </select> */}
      </S.FilterContainer>
    );
  }
}

export default Filter;
