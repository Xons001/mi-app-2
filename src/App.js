import { Component } from "react";

class Input extends Component{

  render() {
    return (
      <input
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}

class App extends Component {

  state = {
    nombre: '',
    apellido: '',
  }

  //Metodo 3
  // constructor(props) {
  //   super(props)
  //   this.updateNombre = this.updateNombre.bind(this)
  // }

  // Metodo 1
  updateNombre = (v) => {
    console.log(this);
    this.updateValues( 'nombre', v.target.value )
  }

  //Metodo 2 y 3
  // updateNombre(v) {
  //   console.log(this);
  //   this.updateValues( 'nombre', v.target.value )
  // }

  updateValues = (prop, value) => {
    this.setState({ [prop]: value })
  }
  render() {
    return (
      <div>
        <p>
          Nombre completo: {`${this.state.nombre} ${this.state.apellido}`}
          <Input 
            value={this.state.nombre}
            //Metodo 1 y 3
            onChange={this.updateNombre} 
            // Metodo 2
            // onChange={(arg) => this.updateNombre(arg)} 
          />
          <Input 
            value={this.state.apellido}
            onChange={e => this.updateValues('apellido', e.target.value)}
          />
        </p>
      </div>
    )
  }
}

export default App;
