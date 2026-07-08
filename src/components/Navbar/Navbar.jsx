import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {

const [open,setOpen]=useState(false);

return(

<div className="navbar">

<h2>AI Forecast</h2>

<div className="admin-section">

<button
className="admin-btn"
onClick={()=>setOpen(!open)}
>
Admin
</button>

{
open && (

<div className="profile-menu">

<div className="profile-info">

<h3>Admin</h3>

<p>Retail Manager</p>

<p>admin@gmail.com</p>

</div>

<hr/>

<Link to="/dashboard">Dashboard</Link>

<Link to="/inventory">Inventory</Link>

<Link to="/forecasting">Forecasting</Link>

<Link to="/offers">Offers</Link>

<Link to="/subscription">Subscription</Link>

<hr/>

<Link to="#">Profile</Link>

<Link to="#">Settings</Link>

<Link to="/">Logout</Link>

</div>

)

}

</div>

</div>

)

}

export default Navbar;