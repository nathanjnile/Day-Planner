import React, { Component } from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import InputForm from "./components/InputForm/InputForm";
import EntryList from "./containers/EntryList/EntryList";

class App extends Component {
  
  render() {

    return (
        <div className="App">
        <Layout/>
        <InputForm/>
        <EntryList/>
        </div>
    );
  }
  

}

export default App;
