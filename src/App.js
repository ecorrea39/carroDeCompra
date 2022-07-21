import { Component } from "react";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Productos from "./components/Productos";
import Title from "./components/Title";

class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img: "/productos/tomate.jpg" },
      { name: "Arbejas", price: 2500, img: "/productos/arbejas.jpg" },
      { name: "Lechuga", price: 1500, img: "/productos/lechuga.jpg" },
    ],
    carro: [],
    esCarroVisible: false,
  };

  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    if (carro.find((x) => x.name === producto.name)) {
      const newCarro = carro.map((x) =>
        x.name === producto.name
          ? {
              ...x,
              cantidad: x.cantidad + 1,
            }
          : x
      );
      return this.setState({ carro: newCarro });
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      }),
    });
  };

  mostrarCarro = () => {
    this.setState({ esCarroVisible: !this.state.esCarroVisible });
  };

  borrarProducto = (producto) => {
    console.log(producto);
    const { carro } = this.state;
    if (carro.find((x) => x.name === producto.name)) {
      const newCarro = carro.filter(function (car) {
        return car.name !== producto.name;
      });
      return this.setState({ carro: newCarro });
    }
    return producto;
  };

  render() {
    const { esCarroVisible, carro } = this.state;
    return (
      <div>
        <Navbar
          carro={carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
          borrarProducto={this.borrarProducto}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
