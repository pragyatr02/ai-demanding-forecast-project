import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"

function Login() {

const navigate = useNavigate()

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

function handleLogin(){

if(
email==="admin@gmail.com"
&&
password==="1234"
){
navigate("/dashboard")
}
else{
alert("Invalid Email or Password ❌")
}

}

return(

<div className="login-page">

<div className="left">

<h1>AI Demand Forecast</h1>

<p>
Predict demand.
Manage inventory.
Grow smarter.
</p>

</div>

<div className="login-card">

<h2>Welcome Back 👋</h2>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleLogin}>
Login
</button>

</div>

</div>

)

}

export default Login