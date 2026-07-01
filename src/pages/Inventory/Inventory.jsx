import "./Inventory.css"
import Navbar from "../../components/Navbar/Navbar"

function Inventory() {

const data=[
["Laptop",45],
["Mouse",120],
["Keyboard",70],
["Monitor",35],
]

return(
    <div>

<Navbar/>

<div className="inventory">

<h1>Inventory</h1>

<div className="table">

<div className="header">

<span>Product</span>

<span>Stock</span>

</div>
</div>

{
data.map((item,index)=>(

<div
className="row"
key={index}
>

<span>
{item[0]}
</span>

<span>
{item[1]}
</span>

</div>

))
}

</div>

</div>

)

}

export default Inventory