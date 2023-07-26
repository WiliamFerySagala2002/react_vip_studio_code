import { Fragment } from 'react'
import FormInputs from '../../Elements/FormInputs'
import Buttons from '../../Elements/Buttons'

export default function FormLogin() {
  const handleLogin = (e) => {
    e.preventDefault()
    localStorage.setItem('email', e.target.email.value)
    localStorage.setItem('password', e.target.password.value)
    window.location.href = '/products'
  }

  return (
    <Fragment>
      <form onSubmit={handleLogin}>
        <FormInputs
          placeholder={'example@gmail.com'}
          name={'email'}
          type={'email'}>
          Email
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
      </form>
    </Fragment>
  )
}
