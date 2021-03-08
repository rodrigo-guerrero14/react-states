import userDefault from '../../assets/images/userDefault.png'
import './coment.css'

export default function Coment({ text, idComentary, eliminateElement}){


  return (
    <section className="coment">
      <div className="wrapper">
        <div className="coment-content">
          <img src={userDefault} alt="user profile pics"/>
          <h3>Comentario número #{idComentary}</h3>
          <p>{text}</p>
          <button className="btn btn-secondary" onClick={() => eliminateElement(idComentary - 1)}>Eliminate</button>
        </div>
      </div>
    </section>
  )
}