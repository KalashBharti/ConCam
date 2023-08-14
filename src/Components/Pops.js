import React from 'react'

export default function Pops({message, active}) {
  return (
    <div className={active?'pops active':'pops'}>
      <label>{message}</label>
    </div>
  )
}
