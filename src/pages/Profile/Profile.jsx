import React, { useEffect, useState } from 'react'
import { DragAndDropInput } from '../../components/Inputs/DragAndDropInput'
import { IMAGE_EXTENSION_TYPES } from '../../utils/constants'
import { useGetUserData, loader } from '../../utils'
import { Input } from '../../components/Inputs/Input'
import "./profile.css"
import { Button } from '../../components/Buttons/Button'
import { Controller, useForm } from 'react-hook-form'
import { uploadDoc } from '../../services/apis/api'
import { updateDocData } from '../../services/firebase/updateData'
import { useDispatch } from 'react-redux'
import { updateUserData } from '../../store/slices/authSlice'
import { useUserId } from '../../hooks/useUserId'



export const Profile = () => {


    const [deletedFile, setDeletedFile] = useState([])
    let userData = useGetUserData()
    let userId = useUserId()

    const { control, handleSubmit, watch, setValue, reset } = useForm({
        defaultValues: {
            profileImage: null,
            about_me: userData?.about_me,
            name: userData?.name,
            email: userData?.email,
            mobile: userData?.mobile
        }
    })

    let profileImage = watch("profileImage")

    let dispatch = useDispatch()

    useEffect(() => {
        reset({ ...userData })
    }, [userData])

    async function updateProfile(data) {
        let file = data.profileImage?.file;

        try {
            loader.start()
            if (file) {
                let upload = await uploadDoc([file]);
                data.profileImage = upload.data.data[0]
            }


            let rr = await updateDocData("users", userId, data);
            dispatch(updateUserData(data))
            console.log(data)
        }
        catch (err) {
            console.log(err)
        }
        finally {
            loader.stop()
        }
    }
    return (


        <div>
            <h3 className='text-center mt-3'>Settings</h3>

            <form onSubmit={handleSubmit(updateProfile)}>

                <div className="row">
                    <div className="col-12 d-flex align-items-center gap-4">
                        <div className='flex-fill'>
                            <label>Profile Image</label>
                            <Controller
                                name="profileImage"
                                control={control}
                                defaultValue={null}

                                render={({ field: { value, onChange } }) => {
                                    return (
                                        <DragAndDropInput
                                            setDeleted={setDeletedFile}
                                            acceptedFileTypes={IMAGE_EXTENSION_TYPES}
                                            value={[value].filter(e => e)}
                                            onChange={(e) => onChange(e[0])}
                                        />)
                                }}
                            />
                        </div>
                        {profileImage?.fileUrl && <div>
                            <img
                                src={profileImage?.fileUrl}
                                className='profile_image'
                            />
                        </div>
                        }
                    </div>


                    <div className="col-lg-6 col-12 mt-3">
                        <label>Name</label>
                        <Controller
                            name="name"
                            control={control}
                            defaultValue={null}

                            render={({ field: { value, onChange } }) => {
                                return (
                                    <Input
                                        value={value}
                                        onChange={onChange}
                                    />)
                            }}
                        />

                    </div>


                    <div className="col-lg-6 col-12 mt-3">
                        <label>Email</label>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue={null}

                            render={({ field: { value, onChange } }) => {
                                return (
                                    <Input
                                        value={value}
                                        onChange={onChange}
                                    />)
                            }}
                        />
                    </div>
                    <div className="col-lg-6 col-12 mt-3">
                        <label>Phone</label>
                        <Controller
                            name="mobile"
                            control={control}
                            defaultValue={null}

                            render={({ field: { value, onChange } }) => {
                                return (
                                    <Input
                                        value={value}
                                        onChange={onChange}
                                    />)
                            }}
                        />

                    </div>
                    <div className="col-12 mt-3">
                        <label>About Me</label>
                        <Controller
                            name="about_me"
                            control={control}
                            defaultValue={null}

                            render={({ field: { value, onChange } }) => {
                                return (
                                    <textarea
                                    className='form-control'
                                        value={value}
                                        placeholder='About me...'
                                        onChange={onChange}
                                    ></textarea>)
                            }}
                        />
                    </div>

                </div>

                <div className="d-flex justify-content-end gap-3 mt-5">
                    <Button secondary title={"Cancel"} />
                    <Button primary title={"Update"} />
                </div>
            </form>

        </div>
    )
}
