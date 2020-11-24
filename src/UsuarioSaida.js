import * as React from "react";

class UsuarioSaida extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>
        <p>Login: {this.props.login}</p>
        <p>Segundo paragrafo com texto qualquer</p>
      </div>
    );
  }
}

export default UsuarioSaida;
