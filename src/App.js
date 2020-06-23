import React, { Component } from 'react';
import './App.css';
import InputComponents from './components/InputComponents';
import ButtonComponent from "./components/ButtonComponent";

class App extends Component {
    state = {
      result: ""
    }

  onClick = button => {

    if(button === "="){
      this.calculate()
    }

    else if(button === "C"){
      this.reset()
    }
    else if(button === "CE"){
      this.backspace()
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };


  calculate = () => {
    let checkResult = ''
    if(this.state.result.includes('--')){
      checkResult = this.state.result.replace('--','+')
    }

    else {
      checkResult = this.state.result
    }

    try {
      this.setState({
        result: (eval(checkResult) || "" ) + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })

    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render() {
    return (
        <div>
          <div className="calculator-body">

            <InputComponents result={this.state.result}/>
            <ButtonComponent onClick={this.onClick}/>
          </div>
        </div>
    );
  }
}

export default App;