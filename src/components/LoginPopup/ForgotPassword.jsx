import React, { useState } from 'react'
import { Input } from '../Inputs/Input'
import { Button } from '../Buttons/Button'
import { passwordReset } from '../../services/firebase/auth'
import { loader, toast } from '../../utils'

export const ForgotPassword = ({ onLoginClick }) => {
  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState(false)

  async function resetPassword () {
    try {
      loader.start()
      const res = await passwordReset(email)
      setEmailSent(true)
    } catch (error) {
      toast.error('Some Error Occured while reset password !')
      console.log(error)
    } finally {
      loader.stop()
    }
  }

  return (
    <div>
      {!emailSent ? (
        <>
          <div>
            <Input
              label={'Email'}
              value={email}
              onChange={e => setEmail(e.target.value)}
              className='form-control'
              placeholder='Enter Email'
            />
          </div>
          <div>
            <Button
              primary
              onClick={resetPassword}
              fullWidth
              title={'Reset Password'}
            />
          </div>
        </>
      ) : (
        <>
          <div>Password reset email has been sent. </div>
          <br />
          <Button primary onClick={onLoginClick} fullWidth title={'Login'} />
        </>
      )}
    </div>
  )
}
