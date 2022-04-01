import React from "react";
import * as S from './styles'

class Filter extends React.Component {
 
  
  render() {
    return (
      <S.Container>
      <S.ContainerFilter>

<S.ContainerInput>
<h3>Filtros</h3>

Valor Mínimo:
<S.Input type="number"
value={this.props.minFilter}
onChange={this.props.onChangeMinFilter}
/>
Valor Máximo:
<S.Input type="number"
value={this.props.maxFilter}
onChange={this.props.onChangeMaxFilter}
/>
Busca por nome:
<S.Input type="text" 
 value={this.props.nameFilter}
 onChange={this.props.onChangeNameFilter}
/>

<div>
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
      </div>
</S.ContainerInput>


     
      </S.ContainerFilter>
      </S.Container>
    );
  }
}

export default Filter;
