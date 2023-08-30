import { Fragment } from 'react'
import AuthLayout from '../../components/Layout/AouthLayout'
import FormLogin from '../../components/Fragments/FormLogin'

const LoginPages = () => {
  const userLogin = { username: 'mor_2314', password: '83r5^_' }
  console.table(userLogin)
  return (
    <Fragment>
      <AuthLayout title={'Login'}>
        <FormLogin />
      </AuthLayout>
    </Fragment>
  )
}

export default LoginPages
