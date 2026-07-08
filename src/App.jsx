import {
BrowserRouter,
Routes,
Route
}
from "react-router-dom"

import Login from "./pages/Login/Login"
import Dashboard from "./pages/Dashboard/Dashboard"
import Inventory from "./pages/Inventory/Inventory"
import Forecasting from "./pages/Forecasting/Forecasting"
import Offers from "./pages/Offers/Offers"
import UploadDataset from "./pages/UploadDataset";

function App(){

return(

<BrowserRouter>

<Routes>
    
<Route
  path="/upload"
  element={<UploadDataset />}
/>

<Route
path="/"
element={<Login/>}
/>

<Route
path="/dashboard"
element={<Dashboard/>}
/>

<Route
path="/inventory"
element={<Inventory/>}
/>

<Route
path="/forecasting"
element={<Forecasting/>}
/>

<Route
path="/offers"
element={<Offers/>}
/>

</Routes>

</BrowserRouter>

)

}

export default App