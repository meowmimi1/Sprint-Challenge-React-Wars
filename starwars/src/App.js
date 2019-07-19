import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import StarWars from './components/StarWars'

const App = () => {
  const [data, setPeople] = useState([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const fetch = () =>{
  axios.get("https://swapi.co/api/people/?format=json")
  .then(response => {
    setPeople(response.data.results)
    console.log(response.data)
  })
  .catch(error => { console.log("No people found")}
  )
}
useEffect(fetch, [])
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      {data.map((item, index) => {return <StarWars key={index} name={item.name} gender={item.gender} height={item.height}/>})}
      <h1 className="Header">React Wars</h1>
    </div>
    );
  }
    // data.map(item => { return <StarWars  setPeople={item.data} />  })

  

export default App;
