import React, { useState } from 'react'

const AallHokes = () => {
    const [count ,setCount] =useState(0)
    const [num ,setNum] =useState(0)
  return (
    
    <div className='hiii'>
       {/* useUseRef */}
       <button className=' bg-red-500'>-</button>
       <span>{count}</span>
       <button>+</button>

    </div>
  )
}

export default AallHokes
