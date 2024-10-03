import Link from 'next/link'
import React from 'react'
import Cart from '../components/Cart'

function about() {
  return (
   <>
    <div>
        <h1>about</h1>
    </div>
    <div className='flex justify-center gap-10 text-2xl mt-2'>    
      <button className='btn btn-warning'><Link href={'/'}>Home</Link></button>
      <button className='btn btn-warning'><Link href={'/contact'}>Contact</Link></button>
    </div>
     <div className='mt-5 px-5 py-5 flex justify-center gap-10'>
        <Cart title={'Hasan khan'} description={'My Name Is Hasan'}/>
        <Cart title={'Ahsan khan'} description={'My Name Is Ahsan'}/>
        <Cart title={'Tayyab khan'} />
     </div>
   </>
  )
}

export default about
