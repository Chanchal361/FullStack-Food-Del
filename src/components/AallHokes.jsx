import React, { useState } from 'react'

const AallHokes = () => {
    const [count ,setCount] =useState(0)
    const [num ,setNum] =useState(0)
  return (
    
    <div className='hiii border-b-red-900'>
       {/* useUseRef */}
       <button onClick={()=>setCount(c=>c-1)}>-</button>
       <span>{count}</span>
       <button onClick={()=>setCount(c=>c+1)}>+</button>

    </div>
  )
}

export default AallHokes
