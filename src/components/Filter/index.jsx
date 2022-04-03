import React from 'react';
import * as S from './styles'


class Filters extends React.Component {
	render(){
	return (
		<S.FiltersContainer>
		<S.Input type="text"
		placeholder='Pesquisa'
		value={this.props.query}
		onChange={this.props.updateQuery}
		/>
			<S.Input type="number"
		placeholder='Preço Mínimo'
		value={this.props.minPrice}
		onChange={this.props.updateMinPrice}
		/>
			<S.Input type="number"
		placeholder='Preço Máximo'
		value={this.props.maxPrice}
		onChange={this.props.updateMaxPrice}
		/>

<div>
<label htmlFor="sort">Ordenação: </label>

<select 
name="sort" 
value={this.props.sortingParameter}
	onChange={this.props.updateSortingParameter}
>
<option value="nome">Nome</option>
<option value="preco">Preço</option>
</select>



<select name="order" 
value={this.props.order}
onChange={this.props.updateOrder}
>
<option value={1}>Crescente</option>
<option value={-1}>Decrescente</option>
</select>
</div>


		</S.FiltersContainer>
   );
  }
}

export default Filters;