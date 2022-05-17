import React from 'react'
import Button from '@components/Button'
import Modal from '@components/AdminComponents/Modal'
import { useModalContext } from "@contexts/ModalContext"
import { useAdminAuth } from '@hooks/Admin/useAdminAuth'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const loginForm = [
    { label: "Username", type: "text", action: "logUsername", name: "username" },
    { label: "Password", type: "password", action: "logPassword", name: "password" }
]

const schema = yup.object().shape({
    username: yup.string().required('Username tidak boleh kosong'),
    password: yup.string().required('Password tidak boleh kosong').min(8, 'Minimal 8 karakter')
})

function LoginPage() {

    const { loginSubmit, disable, logRes } = useAdminAuth()
    const modalContext = useModalContext()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched"
    })

    return (
        <div className="bg-admin-background w-full min-h-screen flex items-center justify-center">
            <div className="flex flex-col space-y-16 items-center w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto rounded-2xl shadow-md bg-themeWhite px-6 md:px-10 py-10">
                <div className="text-heading-2 font-poppins font-bold text-admin-blue">Login</div>
                <form className="flex flex-col space-y-3 w-full" onSubmit={handleSubmit(loginSubmit)}>
                    {loginForm.map((form, index) => (
                        <div key={index} className="flex flex-col sm:items-center sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                            <div className="text-paragraph-2 font-poppins font-semibold text-admin-black flex-none w-1/5 items-center justify-center">{form.label}</div>
                            <div className="w-full sm:w-3/4">
                                <input
                                    type={form.type}
                                    disabled={disable}
                                    name={form.name}
                                    {...register(form.name, { required: true })}
                                    className={`flex w-full text-md font-bold border-2 ${errors[form.name] ? `border-red-600` : `border-admin-gray`} disabled:opacity-50 rounded-full px-2 py-px focus:outline-none`}
                                />
                                <div>{errors[form.name] && <p className="text-xs text-red-600 break-words">{errors[form.name].message}</p>}</div>
                            </div>
                        </div>
                    ))}
                    <input id="submitForm" type="submit" className="hidden" />
                    <div className="flex flex-col w-full pt-10 px-12">
                        <Button
                            disabled={disable}
                            text="Login"
                            color="adminblue"
                            fontFamily="font-poppins font-medium"
                            onClick={() => {
                                document.getElementById('submitForm').click()
                            }} >
                        </Button>
                    </div>
                </form>
            </div>
            {logRes !== null && (
                <Modal
                    title={logRes.title}
                    onClick={modalContext.closeModalDispatch}
                    closeModal={modalContext.closeModalDispatch}
                    isOpen={modalContext.isOpenState}
                >
                    <div>{logRes.content}</div>
                </Modal>
            )}
        </div>
    )
}

export default LoginPage