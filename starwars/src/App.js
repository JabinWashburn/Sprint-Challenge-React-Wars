import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import Content from './components/Content'
import Characters from './components/Content'


export default function App () {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [info, setInfo] = useState([])
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        console.log(response)
        setInfo(response.data.result)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div className="App">
     {info.map (item =>{
        return <Content key={item.height} name = {item.name} birth = {item.birth_year} mass ={item.mass}/>
      })}
    </div>
  );
}