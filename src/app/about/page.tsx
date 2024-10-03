import Link from 'next/link'
import React from 'react'

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
   </>
  )
}

export default about
