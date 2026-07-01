import "./Dashboard.css"
import Navbar from "../../components/Navbar/Navbar"

function Dashboard() {
  return (
    <div>

<Navbar/>


<div className="dashboard">

<div className="top">

<h1>Dashboard</h1>

<div className="profile">
👩 Admin
</div>
</div>

</div>

<div className="cards">

<div className="card">
<h3>Total Sales</h3>
<h2>₹85,420</h2>
</div>

<div className="card">
<h3>Inventory</h3>
<h2>230 Items</h2>
</div>

<div className="card">
<h3>Forecast Accuracy</h3>
<h2>92%</h2>
</div>

<div className="card">
<h3>Active Offers</h3>
<h2>18</h2>
</div>

</div>

<div className="middle">

<div className="chart">

<h2>Demand Forecast</h2>

<div className="bars">

<div className="bar one"></div>
<div className="bar two"></div>
<div className="bar three"></div>
<div className="bar four"></div>

</div>

</div>

<div className="activity">

<h2>Recent Activity</h2>

<p>✔ Inventory Updated</p>

<p>✔ AI Forecast Generated</p>

<p>✔ New Offer Created</p>

</div>

</div>

</div>

)

}

export default Dashboard