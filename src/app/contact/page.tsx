import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
    <>
    <div>
        <h1>Contact</h1>
    </div>
    <div className='flex justify-center gap-10 text-2xl mt-2'>    
      <button className='btn btn-warning'><Link href={'/'}>Home</Link></button>
      <button className='btn btn-warning'><Link href={'/about'}>About</Link></button>
    </div>
   </>
    </>
  )
}

export default page
