import { Fragment } from 'react'
import FormInputs from '../../Elements/FormInputs'
import Buttons from '../../Elements/Buttons'
import { login } from '../../../services/auth.service'
import { useState } from 'react'

export default function FormLogin() {
  const [loginFailed, setLoginFailed] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // localStorage.setItem('email', e.target.email.value)
    // localStorage.setItem('password', e.target.password.value)
    // window.location.href = '/products'

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    }
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem('token', res)
        window.location.href = '/products'
      } else {
        setLoginFailed(res.response.data)
        console.log(res.response.data)
      }
    })
  }

  return (
    <Fragment>
      <form onSubmit={handleLogin}>
        <FormInputs
          placeholder={'enter your username'}
          name={'username'}
          type={'text'}>
          Username
        </FormInputs>
        <FormInputs
          placeholder={'enter your password'}
          name={'password'}
          type={'password'}>
          Password
        </FormInputs>
        <Buttons btnStyle="bg-blue-500 hover:bg-blue-700" type="submit">
          Login
        </Buttons>
        {loginFailed && (
          <p className="text-center text-red-500">{loginFailed}</p>
        )}
      </form>
    </Fragment>
  )
}
