import React from 'react'
import Input from '../../Elements/Input'
import Label from '../../Elements/Label'

export default function FormInputs({ name, children, type, placeholder }) {
  return (
    <div>
      <div className="mb-6">
        <Label name={name}>{children}</Label>
        <Input type={type} placeholder={placeholder} name={name} />
      </div>
    </div>
  )
}
