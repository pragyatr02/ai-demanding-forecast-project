import "./Forecasting.css";
import Navbar from "../../components/Navbar/Navbar";

function Forecasting() {
  return (
    <div>
      <Navbar />

      <div className="forecast">

        <div className="forecast-header">
          <h1>AI Demand Forecast</h1>
          <button>Generate Forecast</button>
        </div>

        <div className="forecast-cards">

          <div className="forecast-card">
            <h3>Expected Sales</h3>
            <h2>₹1,28,000</h2>
            <p>Next 30 Days</p>
          </div>

          <div className="forecast-card">
            <h3>Prediction Accuracy</h3>
            <h2>92%</h2>
            <p>Machine Learning Model</p>
          </div>

          <div className="forecast-card">
            <h3>High Demand Product</h3>
            <h2>Milk 🥛</h2>
            <p>Expected Growth +28%</p>
          </div>

        </div>

        <div className="graph-box">

          <h2>Demand Trend</h2>

          <div className="graph">

            <div className="line one"></div>
            <div className="line two"></div>
            <div className="line three"></div>
            <div className="line four"></div>
            <div className="line five"></div>

          </div>

        </div>

        <div className="prediction-box">

          <h2>🤖 AI Recommendations</h2>

          <ul>
            <li>Increase Milk stock by 25%</li>
            <li>Reduce Cold Drinks inventory</li>
            <li>Launch Bakery offers this weekend</li>
            <li>Demand expected to rise before festivals</li>
          </ul>

        </div>

      </div>
    </div>
  );
}

export default Forecasting;