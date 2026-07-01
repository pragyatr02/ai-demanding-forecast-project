import "./Offers.css"
import Navbar from "../../components/Navbar/Navbar"

function Offers(){

return(
    <div>

<Navbar/>

<div className="offers">

<h1>Special Offers</h1>

<div className="offer-grid">

<div className="offer-card">

<h2>Summer Sale</h2>

<p>
20% OFF on selected products
</p>

<button>
View
</button>

</div>
</div>

<div className="offer-card">

<h2>Premium Plan</h2>

<p>
Get AI insights and forecasts
</p>

<button>
Upgrade
</button>

</div>

<div className="offer-card">

<h2>Inventory Boost</h2>

<p>
Extra analytics for inventory
</p>

<button>
Explore
</button>

</div>

</div>

</div>

)

}

export default Offers