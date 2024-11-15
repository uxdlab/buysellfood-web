import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Input } from '../Inputs/Input'
import { Button } from '../Buttons/Button'

export const LoginForm = ({ onSubmit }) => {


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
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                value={value}
                                onChange={onChange}
                            />
                        )
                    }} />
                <br />

                <Button primary fullWidth title={"Login"} type="submit" />

            </form>
        </div>
    )
}
