import React from 'react'

export default function Label({ name, children }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-slate-700 text-sm font-bold mb-2">
        {children}
      </label>
    </div>
  )
}
