import * as React from "react";

class UsuarioEntrada extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h1>Entrada do Usuário</h1>
        <input type="text" value={this.props.value} onChange={this.props.onChange}/>
      </div>
    );
  }
}

export default UsuarioEntrada;
