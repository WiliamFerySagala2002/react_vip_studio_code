import React from 'react'
import { useLogin } from '../../hooks/useLogin'

export default function ProfilePages() {
  const username = useLogin()

  return (
    <div>
      <h1>ProfilePages</h1>
      <h3>{username}</h3>
    </div>
  )
}
