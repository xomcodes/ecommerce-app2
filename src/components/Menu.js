import React from 'react'
import Product from './Product'
import {Row, Col, Container} from "react-bootstrap"
import sofa1 from "../assets/sofa1.jpg"


export default function Menu(props) {
  const {products, onAdd} = props
    return (
        <div>
          <h1 class="text-capitalize">
        our <strong class="banner-title col-3">Products</strong>
      </h1> 

       <a href="#" class="btn btn-outline-secondary btn-black selection ">
        SOFA
      </a>

       <a href="#" class="btn btn-outline-secondary btn-black selection ">
        DINNING
      </a>

      <a href="#" class="btn btn-outline-secondary btn-black selection ">
        BED
      </a>

      <a href="#" class="btn btn-outline-secondary btn-black selection ">
        KITCHEN
      </a>


       <Container>
       <div className ="row justify-content-between align-items-center">
  {products.map((product) => (
    <Product key ={product.id} product = {product} onAdd = {onAdd}/>
  ))}
  </div>
 
</Container> 





{/* <div className ="row justify-content-between align-items-center">
  {products.map((product) => (
    <Product key ={product.id} product = {product} onAdd = {onAdd}/>
  ))}
  </div> */}



        </div>

    )
}
