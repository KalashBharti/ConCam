import React from 'react'

export default function BackDrop({start,BackdropOff}) {
  return (
    // backdrop is enable when sidebar ==true
    
    <div className={start?'backdrop active':'backdrop'} onClick={BackdropOff}>  {/* on clicking backdrop the sidebar will become false */}
      
    </div>
  )
}
