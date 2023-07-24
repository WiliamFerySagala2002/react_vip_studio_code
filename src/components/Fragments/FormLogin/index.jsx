import { Fragment } from 'react'
import FormInputs from '../../Elements/FormInputs'
import Buttons from '../../Elements/Buttons'

export default function FormLogin() {
  return (
    <Fragment>
      <form action="">
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
        <Buttons btnStyle="bg-blue-500 hover:bg-blue-700">Login</Buttons>
      </form>
    </Fragment>
  )
}
