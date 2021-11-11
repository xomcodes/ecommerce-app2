import React from 'react'
import Product from './Product'

export default function Menu(props) {
  const {products} = props
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

<div class = "row">
  {products.map((product) => (
    <Product key ={product.id} product = {product}></Product>
  ))}

</div>

        </div>

    )
}
