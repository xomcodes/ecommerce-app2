
import "./App.css";
import Header from "./components/Header"
import Menu from "./components/Menu"
// import Product from "./components/Product";
import Shopcart from "./components/Shopcart"
import data from "./data"
import {useState} from "react"

function App() {
  const{products} = data
  const[cartItems, setCartItems] = useState([])
  const onAdd =(product)=> {
    const exist = cartItems.find((x)  => x.id === product.id);
    if(exist){
      setCartItems(
        cartItems.map((x) =>
         x.id === product.id ? {... exist,qty: exist.qty + 1} :x
         )
         );
    }else{
      setCartItems([...cartItems, {... product,qty: 1}]);
   
    };

  }


  return (
    <div className="App">
     <Header/>
     < Menu onAdd ={onAdd} products ={products}/>
     <Shopcart onAdd ={onAdd}cartItems ={cartItems}/>
     {/* <Product/> */}
    </div>
  )
}

export default App;
