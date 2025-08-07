import { useState } from 'react'
import './App.css'
import axios from "axios"
import { useEffect } from 'react'


function App() {

const [jokes, setJokes] = useState([])


useEffect(() => {
  axios.get('/api/jokes')
  .then((response) => {
    setJokes(response.data)
  })
  .catch((error) => {
    console.log(error)
  })
 
}, [])


 
  return ( <>
  <h2>Complete Frontend and Backend</h2>

<h2>No Of joke is: {jokes.length}</h2>

{jokes.map((jokes) => (
  <div key={jokes.id}>
    <h3>{jokes.title}</h3>
    <p>{jokes.address}</p>
  </div>
))}

  </>
  )
}

export default App
