import React from "react";
import "./App.css";
import Filter from "./components/Filter/Filter";
import { ShoppingCart } from "./components/ShoppingCart";
// belén inicio
import CardProdutos from "./components/CardProdutos";
import styled from "styled-components";
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

const ContainerPai = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 100%;
`;

const ContainerProdutos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 90%;
  height: 80%;
  gap: 10px;
`;

const Textos = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 90%;
`;

const Ordenadores = styled.p`
  display: flex;
  justify-content: end;
  flex-direction: row;
  width: 90%;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

// belén fin

class App extends React.Component {
  // ANCHOR  STATE
  state = {
    nameFilter: "",
    minFilter: "",
    maxFilter: "",
    sortingParameter: "title",
    order: 1,
    // belén
    produtos: produtos,
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
    // belén inicio
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
    // belén fin
    return (
      <div>
        <Filter
          nameFilter={this.state.nameFilter}
          updateName={this.state.updateName}
          updateMinFilter={this.state.updateminFilter}
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
            <p> Quantidade de produtos:</p>
            <Ordenadores>
              <button onClick={this.OrdemCrescente}> Ordem Crescente</button>
              <button onClick={this.OrdemDecrescente}>
                {" "}
                Ordem Decrescente
              </button>
            </Ordenadores>
          </Textos>

          <ContainerProdutos>{lista}</ContainerProdutos>
        </ContainerPai>
        {/* belén fin */}

        <ListContainer>
          {this.state.jobs
            .filter((job) => {
              return (
                job.title
                  .toLowerCase()
                  .includes(this.state.query.toLowerCase()) ||
                job.description
                  .toLowerCase()
                  .includes(this.state.query.toLowerCase())
              );
            })
            .filter((job) => {
              return (
                this.state.minPrice === "" || job.price >= this.state.minPrice
              );
            })
            .filter((job) => {
              return (
                this.state.maxPrice === "" || job.price <= this.state.maxPrice
              );
            })
            .sort((currentJob, nextJob) => {
              switch (this.state.sortingParameter) {
                case "title":
                  return (
                    this.state.order *
                    currentJob.title.localeCompare(nextJob.title)
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
            .map((job) => {
              return <Card key={job.id} job={job} />;
            })}
        </ListContainer>
      </div>
    );
  }
}

export default App;
