import './App.css';
import {useState} from 'react'
import Header from 'components/Header'
import Form from 'components/Form'
import Coment from 'components/Coment'

function App() {

  const [states, setStates] = useState([])

  const handleSubmit = function (evt){
    evt.preventDefault()
    const {value} = evt.target[0]
    if( isformated(value)){
      setStates([...states, value])
      evt.target[0].value = ""
    }
  }

  const isformated = (coment) => {
    if(coment === "" || null || undefined){
      alert("El nuevo comentario debe contener como minimo un caracter")
      return false
    }
    return true
  }

  const handleChange = (event) =>{
    let {value} = event.target
    console.log(value.lenght)
  }

  const handleEliminate = (id) => {
    console.log("handle Eliminate", id)
    const newState = states.filter((element, index) => index !== id)
    setStates(newState)
  }

  return (
    <div className="App">
      <Header />
      <Form handleSubmit={handleSubmit} handleChange={handleChange}/>
      {states.map((singleState, index) => {
       return  <Coment text={singleState} idComentary={index + 1} eliminateElement={handleEliminate} />
      })}
    </div>
  );
}

export default App;