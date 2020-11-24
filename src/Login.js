import * as React from "react";
import UsuarioEntrada from "./UsuarioEntrada";
import UsuarioSaida from "./UsuarioSaida";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: ""
    };

    this.OnChangeEntrada = this.OnChangeEntrada.bind(this);
  }

  OnChangeEntrada(e) {
    this.setState({login: e.target.value});
  }

  render() {
    return (
      <div>
        <UsuarioEntrada value={this.state.login} onChange={this.OnChangeEntrada}/>
        <UsuarioSaida login="Login via Props"/>
        <UsuarioSaida login={this.state.login}/>
      </div>
    );
  }
}

export default Login;
