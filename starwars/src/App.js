import React from 'react';
import './App.css';
import axios from 'axios';
const App = () => {
  const [people, setPeople] = useState([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const fetch = () =>{
  axios.get("http https://swapi.co/api/people/1/")
  .then(response => {
    setPeople(response.people)
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
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
