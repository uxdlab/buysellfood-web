import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '../Buttons/Button'
import { Input } from '../Inputs/Input'

export const SignupForm = ({ signUpFor, onSubmit }) => {

    let isRestaurantSignUp = signUpFor === "restaurant"

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            mobile: '',
            email: '',
            password: ""
        }
    })

    function formSubmit(data) {
        console.log(data)
        onSubmit(data, signUpFor)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(formSubmit)}>
                <div className="Login-signup-form">
                    <Controller
                        name="name"
                        control={control}
                        defaultValue={null}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => {
                            return (
                                <Input
                                    type="text"
                                    error={errors.name}
                                    name="name"
                                    placeholder="Enter Name"
                                    value={value}
                                    onChange={onChange}
                                />
                            )
                        }} />
                    <Controller
                        name="mobile"
                        control={control}
                        defaultValue={null}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => {
                            return (
                                <Input
                                    type="text"
                                    error={errors.mobile}
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={value}
                                    onChange={onChange}
                                />
                            )
                        }} />

                    <Controller
                        name="email"
                        control={control}
                        defaultValue={null}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => {
                            return (
                                <Input
                                    type="email"
                                    error={errors.email}
                                    name="email"
                                    placeholder="Email"
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
                                    name="email"
                                    placeholder="Password"
                                    value={value}
                                    onChange={onChange}
                                />
                            )
                        }} />
                    <br />
                    <Button primary title={"Sign Up"} type="submit" />
                </div>
            </form>
        </div>
    )
}
