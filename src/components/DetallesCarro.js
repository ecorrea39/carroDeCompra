import { Component } from "react";

const styles = {
  detallesCarro: {
    backgroundColor: "#fff",
    position: "absolute",
    marginTop: 30,
    boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
    borderRadius: "5px",
    width: "300px",
    right: 50,
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  producto: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    borderBottom: "solid 1px #aaa",
  },
  eliminar: {
    background: "#da3232",
    color: "#fff",
    border: "solid 1px #da3232",
    borderRadius: "5px",
    padding: "5px",
    cursor: "pointer",
  },
};
class DetallesCarro extends Component {
  render() {
    const { carro, borrarProducto } = this.props;
    return (
      <div style={styles.detallesCarro}>
        <ul style={styles.ul}>
          {carro.length > 0 ? (
            <>
              {carro.map((el) => (
                <li key={el.name} style={styles.producto}>
                  <img alt={el.name} src={el.img} width="50" height={32} />
                  {el.name} <span>{el.cantidad}</span>
                  <button
                    style={styles.eliminar}
                    onClick={() => borrarProducto(el)}
                  >
                    Borrar
                  </button>
                </li>
              ))}
            </>
          ) : (
            <li style={styles.producto}>
              <span>No hay elementos en el carro</span>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default DetallesCarro;
