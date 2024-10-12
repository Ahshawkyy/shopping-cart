import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import{BrowserRouter as Router, Routes, Route} from "react-router-dom"
import{Navbar} from "./comp/navbar"
import{Cart} from "./pages/cart/cart"
import{Shop} from "./pages/shop/shop"
import { ShopContextProvider } from "./context/shop-context"; 
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Shop/>}/>
        <Route path = "/cart" element = {<Cart/>}/>
      </Routes>
    </Router>
    </ShopContextProvider>
    </div>
  );
}

export default App;
