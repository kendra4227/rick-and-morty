import React from 'react';
import './App.css';
import axios from "axios";
import CharacterCard from "./components/CharacterCard.js";
import NavBar from "./components/Navbar.js";
// step 1: build out components and think about layout
// step 2: install axios in your rick-n-morty file and import it
// step 3: change app to a class component - use constructor and super
// set initial state to an empty array assigned the name characters
// put a render surrounding your return statement

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: []
    }
  };

  // step 4: create a componentDidMount and put axios call inside there
  componentDidMount() {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        this.setState({
          characters: res.data.results
        })
        // make sure that you are pulling out the exact data that you need!
        // always console.log and see your results from your API
        console.log("API data:", res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }

  // step 5: now that we have our results from our API,
  // lets start to pick some peices we want to render to the screen 
  render() {
    return (
      <div className="App">
        <NavBar/>
        <h1>Rick n' Morty App</h1>
        <img className="rick-n-morty-icon" src="https://www.freeiconspng.com/uploads/rick-and-morty-icon-png-26.png" alt="rick and morty icon" />
        {/* going to create one prop with all of the character data that is from our API that we now set to state */}
        <CharacterCard character_data={this.state.characters}/>
      </div>
    );
  }
}

export default App;
