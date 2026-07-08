import "./Inventory.css";
import Navbar from "../../components/Navbar/Navbar";

function Inventory() {
  return (
    <div>

      <Navbar />

      <div className="inventory">

        <div className="inventory-top">
          <h1>Inventory Management</h1>

          <button className="add-btn">
            + Add Product
          </button>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Search Product..."
          />
        </div>

        <table>

          <thead>

            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Demand</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>Milk</td>
              <td>Dairy</td>
              <td>42</td>
              <td>High</td>
              <td><span className="green">Available</span></td>
            </tr>

            <tr>
              <td>Bread</td>
              <td>Bakery</td>
              <td>16</td>
              <td>Medium</td>
              <td><span className="orange">Low Stock</span></td>
            </tr>

            <tr>
              <td>Rice</td>
              <td>Groceries</td>
              <td>89</td>
              <td>High</td>
              <td><span className="green">Available</span></td>
            </tr>

            <tr>
              <td>Cold Drink</td>
              <td>Beverages</td>
              <td>0</td>
              <td>Low</td>
              <td><span className="red">Out of Stock</span></td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Inventory;