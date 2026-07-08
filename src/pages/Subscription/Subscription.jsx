import "./Subscription.css";
import Navbar from "../../components/Navbar/Navbar";

function Subscription() {
  return (
    <div>
      <Navbar />

      <div className="subscription">

        <div className="subscription-header">
          <h1>Choose Your Plan</h1>
          <p>Unlock advanced AI forecasting and premium features.</p>
        </div>

        <div className="plans">

          {/* Basic */}

          <div className="plan-card">

            <h2>Basic</h2>

            <h1>₹499</h1>

            <span>/month</span>

            <ul>
              <li>✔ Dashboard Access</li>
              <li>✔ Inventory Management</li>
              <li>✔ Basic Forecasting</li>
              <li>✖ Premium Reports</li>
            </ul>

            <button>Choose Plan</button>

          </div>

          {/* Pro */}

          <div className="plan-card active">

            <div className="popular">
              Most Popular
            </div>

            <h2>Pro</h2>

            <h1>₹999</h1>

            <span>/month</span>

            <ul>
              <li>✔ Everything in Basic</li>
              <li>✔ AI Forecasting</li>
              <li>✔ Unlimited Products</li>
              <li>✔ Premium Reports</li>
            </ul>

            <button>Choose Plan</button>

          </div>

          {/* Enterprise */}

          <div className="plan-card">

            <h2>Enterprise</h2>

            <h1>₹1999</h1>

            <span>/month</span>

            <ul>
              <li>✔ Everything in Pro</li>
              <li>✔ Multiple Stores</li>
              <li>✔ Dedicated Support</li>
              <li>✔ Custom AI Models</li>
            </ul>

            <button>Choose Plan</button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Subscription;