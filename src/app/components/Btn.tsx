"use client"
import React from 'react'


function Btn() {
  return (
    <>
    <div>
        <button onClick={()=>console.log('client side')} className='btn btn-primary'>primary</button>
    </div>
    </>
  )
}

export default Btn
