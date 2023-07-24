import React from 'react'

export default function Buttons({
  children = 'Button',
  btnStyle = 'bg-black',
}) {
  return (
    <div>
      <button
        className={`h-10 px-6 w-full font-semibold rounded-md text-white ${btnStyle}`}>
        {children}
      </button>
    </div>
  )
}
