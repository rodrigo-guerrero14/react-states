import './form.css'
import userImage from '../../assets/images/userDefault.png'

export default function Form({handleSubmit}){
  return(
    <section>
      <div className="wrapper">
        <form onSubmit={handleSubmit} className="form">
          <img src={userImage} alt="User profile pic" />
          <input type="text" placeholder="¿Qué está pasando?"/>
          <button className="btn">Twittear</button>
        </form>
      </div>
    </section>
  )
}