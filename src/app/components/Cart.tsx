import React from 'react'

interface Props{
    title : String,
    description? : String
}
function Cart(props :Props) {
  return (
    <>
    <div>
        <h1>{props.title}</h1>
        <p>{props.description ? props.description : "not define"}</p>
    </div>
    </>
  )
}

export default Cart
