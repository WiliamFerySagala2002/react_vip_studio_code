import { Fragment } from 'react'
import FormInputs from '../../Elements/FormInputs'
import Buttons from '../../Elements/Buttons'

export default function FormRegister() {
  return (
    <Fragment>
      <form action="">
        <FormInputs
          placeholder={'insert your name in here'}
          name={'fullname'}
          type={'text'}>
          Fullname
        </FormInputs>
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
        <FormInputs
          placeholder={'Confirm your password'}
          name={'confirmPassword'}
          type={'password'}>
          Confirm Password
        </FormInputs>
        <Buttons btnStyle="bg-blue-500 hover:bg-blue-700">Registers</Buttons>
      </form>
    </Fragment>
  )
}
