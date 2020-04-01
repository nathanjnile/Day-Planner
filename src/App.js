import React, { Component } from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import InputForm from "./components/InputForm/InputForm";

class App extends Component {
  
  render() {

    return (
        <div className="App">
        <Layout/>
        <InputForm/>
        </div>
    );
  }
  

}

export default App;
