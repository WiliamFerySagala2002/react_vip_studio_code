import React, { useEffect, useState } from 'react'
import { getUsername } from '../services/auth.service'

export function useLogin() {
  const [user, setUser] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setUser(getUsername(token))
    } else {
      window.location.href = '/login'
    }
  }, [])

  return user
}
