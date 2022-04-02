import React from "react";
import "./styles.js";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";
// import { ShoppingCart } from "./components/ShoppingCart";
// belén inicio
import CardProdutos from "./components/CardProdutos/CardProdutos";
import {
  Container,
  ContainerPai,
  ContainerProdutos,
  Textos,
  Ordenadores,
  ListContainer,
} from "./styles";
import a from "./Imagens/a.jpg";
import b from "./Imagens/b.jpg";
import c from "./Imagens/c.jpg";
import d from "./Imagens/d.jpg";
import e from "./Imagens/e.jpg";
import f from "./Imagens/f.jpg";

const produtos = [
  {
    id: 1,
    nome: "Produto1",
    preco: "R$10,00",
    imagem: a,
  },

  {
    id: 2,
    nome: "Produto2",
    preco: "R$20,00",
    imagem: b,
  },

  {
    id: 3,
    nome: "Produto3",
    preco: "R$30,00",
    imagem: c,
  },

  {
    id: 4,
    nome: "Produto4",
    preco: "R$40,00",
    imagem: d,
  },

  {
    id: 5,
    nome: "Produto5",
    preco: "R$50,00",
    imagem: e,
  },

  {
    id: 6,
    nome: "Produto6",
    preco: "R$60,00",
    imagem: f,
  },
];

class App extends React.Component {
  // ANCHOR  STATE
  state = {
    produtos: produtos,
    nameFilter: "",
    minFilter: "",
    maxFilter: "",
    sortingParameter: "title",
    order: 1,
  };

  // ANCHOR  EVENT
  onChangeNameFilter = (event) => {
    this.setState({ nameFilter: event.target.value });
  };

  onChangeMinFilter = (event) => {
    this.setState({ minFilter: event.target.value });
  };

  onChangeMaxFilter = (event) => {
    this.setState({ maxFilter: event.target.value });
  };

  updateSortingParameter = (ev) => {
    this.setState({
      sortingParameter: ev.target.value,
    });
  };

  updateOrder = (ev) => {
    this.setState({
      order: ev.target.value,
    });
  };

  // belén incio ordem
  OrdemCrescente = () => {
    let precosCrescentes = [...this.state.produtos];

    precosCrescentes.sort(function (x, y) {
      return x.preco.localeCompare(y.preco, "en", { sensitivity: "base" });
    });

    this.setState({ produtos: precosCrescentes });
  };

  OrdemDecrescente = () => {
    let precosCrescentes = [...this.state.produtos];

    precosCrescentes.sort(function (x, y) {
      return y.preco.localeCompare(x.preco, "en", { sensitivity: "base" });
    });

    this.setState({ produtos: precosCrescentes });
  };
  // belén fin ordem
  render() {
    const lista = this.state.produtos.map((p) => {
      return (
        <CardProdutos
          imagemProduto={p.imagem}
          nomeProduto={p.nome}
          precoProduto={p.preco}
          key={p.id}
        />
      );
    });

    return (
      <Container>
        <Filter
          nameFilter={this.state.nameFilter}
          updateName={this.state.updateName}
          updateMinFilter={this.state.updateMinFilter}
          updateMaxFilter={this.state.updateMaxFilter}
          updateSortingParemeter={this.state.updateSortingParemeter}
          updateOrder={this.state.updateOrder}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          sortingParameter={this.state.sortingParameter}
          order={this.state.order}
        />
        {/*belén inicio*/}
        <ContainerPai>
          <Textos>
            <p>Quantidade de produtos: {produtos.length}</p>
            <Ordenadores>
              <button onClick={this.OrdemCrescente}> Ordem Crescente</button>
              <button onClick={this.OrdemDecrescente}>
                {" "}
                Ordem Decrescente
              </button>
            </Ordenadores>
          </Textos>

          {/* <ContainerProdutos>
            {this.state.produtos
              .filter(
                (p) =>
                  p.title
                    .toLowerCase()
                    .includes(this.state.query.toLowerCase()) ||
                  p.description
                    .toLowerCase()
                    .includes(this.state.query.toLowerCase())
              )
              .filter((p) => {
                return (
                  this.state.minFilter === "" || p.price >= this.state.minFilter
                );
              })
              .filter((p) => {
                return (
                  this.state.maxFilter === "" || p.price <= this.state.maxFilter
                );
              })
              .sort((currentJob, nextJob) => {
                switch (this.state.sortingParameter) {
                  case "title":
                    return (
                      this.state.order * currentJob.title.localeCompare(nextJob.title)
                    );
                  case "dueDate":
                    return (
                      this.state.order *
                      (new Date(currentJob.dueDate).getTime() -
                        new Date(nextJob.dueDate).getTime())
                    );
                  default:
                    return this.state.order * (currentJob.price - nextJob.price);
                }
              })
              .map((p) => {
                return (
                  <CardProdutos
                    imagemProduto={p.imagem}
                    nomeProduto={p.nome}
                    precoProduto={p.preco}
                    key={p.id}
                  />
                );
              })}
          </ContainerProdutos> */}

         <ContainerProdutos>{lista}</ContainerProdutos> 
        </ContainerPai>
        {/* belén fin */}

        <Cart />
      </Container>
    );
  }
}

export default App;
