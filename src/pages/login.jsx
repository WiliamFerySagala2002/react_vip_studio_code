import { Fragment } from 'react'
import AuthLayout from '../components/Layout/AouthLayout'
import FormLogin from '../components/Fragments/FormLogin'

const LoginPages = () => {
  return (
    <Fragment>
      <AuthLayout title={'Login'}>
        <FormLogin />
      </AuthLayout>
    </Fragment>
  )
}

export default LoginPages
