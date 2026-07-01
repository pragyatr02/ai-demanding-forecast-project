import "./Navbar.css"
import { Link } from "react-router-dom"

function Navbar(){

return(

<div className="navbar">

<h2>AI Forecast</h2>

<div className="links">

<Link to="/dashboard">
Dashboard
</Link>

<Link to="/inventory">
Inventory
</Link>

<Link to="/forecasting">
Forecasting
</Link>

<Link to="/offers">
Offers
</Link>

<Link to="/">
Logout
</Link>

</div>

</div>

)

}

export default Navbar