import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Input } from '../Inputs/Input'
import { Button } from '../Buttons/Button'

export const LoginForm = ({ onSubmit, error,onForgotPasswordClick }) => {


    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Controller
                    name="email"
                    control={control}
                    defaultValue={null}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => {
                        return (
                            <Input
                                error={errors.email}
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                value={value}
                                onChange={onChange}
                            />
                        )
                    }} />
                <Controller
                    name="password"
                    control={control}
                    defaultValue={null}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => {
                        return (
                            <Input
                                error={errors.password}
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                value={value}
                                onChange={onChange}
                            />
                        )
                    }} />
                {error.error && <div className='text-danger'>{error.errorMsg}</div>}
                <br />
                <Button primary fullWidth title={"Login"} type="submit" />
                <div className='mt-1 pointer' onClick={onForgotPasswordClick}>Forgot Password ?</div>

            </form>
        </div>
    )
}
