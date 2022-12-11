import './App.css'
import {NavLink} from "react-router-dom";

function App() {

  return (
    <div className="App">
        <h1>my static site</h1>
        <img src="https://media.istockphoto.com/id/1154370446/photo/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=kkZiaB9Q-GbY5gjf6WWURzEpLzNrpjZp_tn09GB21bI=" alt="funny monky"/>
        <br/>
        <NavLink to="/second">
            <button>second page</button>
        </NavLink>
    </div>
  )
}

export default App
