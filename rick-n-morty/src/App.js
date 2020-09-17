import React from 'react';
import './App.css';
import axios from "axios";
import CharacterCard from './CharacterCard';

class  App extends React.Component {
  constructor (){
    super();
    this.state = {
      characters: []
    };
  }

  componentDidMount(){
    axios
    .get(`https://rickandmortyapi.com/api/character`)
    .then(res => {
      this.setState({
        characters: res.data.results
      })
      console.log("API DATA:", res.data.results)
    })
    .catch(err => {
      console.log("Sorry an error occurred", err)
    })
  }


render() {
  return (
    <div className ="App">
      <h1>Rick n' Morty</h1>
      <img 
      src= "https://www.freeiconspng.com/uploads/rick-and-morty-icon-png-26.png"
      alt="rick and morty icon"
      />
      <CharacterCard character_data ={this.state.characters}/>
    </div>
  );
  }
}
export default App;
