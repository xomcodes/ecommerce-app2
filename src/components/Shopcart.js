import React from 'react'

export default function Shopcart(props) {
    const {cartItems, onAdd} = props
    return (
        <div>
            {cartItems.length === 0 && <div>Cart is Empty</div>}
        </div>
    )
}
