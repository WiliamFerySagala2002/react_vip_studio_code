import React from 'react'
import FormRegister from '../../components/Fragments/FormRegister'
import AuthLayout from '../../components/Layout/AouthLayout'

export default function RegisterPage() {
  return (
    <div>
      <AuthLayout title={'Register'}>
        <FormRegister />
      </AuthLayout>
    </div>
  )
}
