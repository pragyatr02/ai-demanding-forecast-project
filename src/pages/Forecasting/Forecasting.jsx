import "./Forecasting.css"
import Navbar from "../../components/Navbar/Navbar"

function Forecasting(){

return(
    <div>

<Navbar/>

<div className="forecast">

<h1>AI Demand Forecasting</h1>

<div className="prediction">

<div className="left">

<h2>Demand Prediction</h2>

<div className="graph">

<div className="line"></div>

</div>
</div>

</div>

<div className="right">

<div className="box">

<h3>Expected Demand</h3>

<h2>+18%</h2>

</div>

<div className="box">

<h3>Inventory Suggestion</h3>

<h2>Restock Soon</h2>

</div>

</div>

</div>

</div>

)

}

export default Forecasting