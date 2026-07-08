import "./Offers.css";
import Navbar from "../../components/Navbar/Navbar";

function Offers() {
  return (
    <div>
      <Navbar />

      <div className="offers">

        <div className="offers-header">
          <h1>Offers & Promotions</h1>
          <button>Create Offer</button>
        </div>

        <div className="offer-grid">

          <div className="offer-card">
            <div className="discount">50% OFF</div>

            <h2>Dairy Products</h2>

            <p>
              Get exciting discounts on Milk, Butter and Cheese.
            </p>

            <span>Valid Till: 15 July</span>
          </div>

          <div className="offer-card">
            <div className="discount">30% OFF</div>

            <h2>Bakery Items</h2>

            <p>
              Fresh bread and cakes at amazing prices.
            </p>

            <span>Valid Till: 18 July</span>
          </div>

          <div className="offer-card">
            <div className="discount">Buy 1 Get 1</div>

            <h2>Beverages</h2>

            <p>
              Buy one soft drink and get another free.
            </p>

            <span>Valid Till: 20 July</span>
          </div>

          <div className="offer-card">
            <div className="discount">Festival Sale</div>

            <h2>Groceries</h2>

            <p>
              Save more on daily grocery essentials.
            </p>

            <span>Valid Till: 25 July</span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Offers;