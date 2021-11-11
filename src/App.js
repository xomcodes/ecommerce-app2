
import "./App.css";
import Header from "./components/Header"
import Menu from "./components/Menu"
// import Product from "./components/Product";
import Shopcart from "./components/Shopcart"
import data from "./data"
import {useState} from "react"

function App() {
  const{products} = data
  const[cartItems, setItem] = useState([])


  return (
    <div className="App">
     <Header/>
     < Menu products ={products}/>
     <Shopcart cartItem ={cartItems}/>
     {/* <Product/> */}
    </div>
  )
}

export default App;
