import React from 'react'
import AuthLayout from '../components/Layout/AouthLayout'
import FormRegister from '../components/Fragments/FormRegister'

export default function RegisterPage() {
  return (
    <div>
      <AuthLayout title={'Register'}>
        <FormRegister />
      </AuthLayout>
    </div>
  )
}
