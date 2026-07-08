import "./Dashboard.css";
import Navbar from "../../components/Navbar/Navbar";

function Dashboard() {
  return (
    <div>
      <Navbar />

      <div className="dashboard">

        <div className="top">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back! Here's your business overview.</p>
          </div>

          <div className="profile">
            👩 Admin
          </div>
        </div>

        {/* Cards */}

        <div className="cards">

          <div className="card">
            <h3>Total Sales</h3>
            <h2>₹85,420</h2>
            <span>▲ +18% this month</span>
          </div>

          <div className="card">
            <h3>Inventory</h3>
            <h2>230 Items</h2>
            <span>15 Low Stock Products</span>
          </div>

          <div className="card">
            <h3>Forecast Accuracy</h3>
            <h2>92%</h2>
            <span>AI Prediction Model</span>
          </div>

          <div className="card">
            <h3>Active Offers</h3>
            <h2>18</h2>
            <span>5 Ending Today</span>
          </div>

        </div>

        {/* Middle Section */}

        <div className="middle">

          <div className="chart">

            <h2>📈 Demand Forecast</h2>

            <div className="bars">

              <div className="bar one"></div>
              <div className="bar two"></div>
              <div className="bar three"></div>
              <div className="bar four"></div>

            </div>

          </div>

          <div className="activity">

            <h2>🤖 AI Insights</h2>

            <div className="activity-item">
              ✔ Inventory Updated
            </div>

            <div className="activity-item">
              ✔ AI Forecast Generated
            </div>

            <div className="activity-item">
              ✔ Demand expected to increase by 22%
            </div>

            <div className="activity-item">
              ✔ Milk and Bread require restocking
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;