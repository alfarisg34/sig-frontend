import React from 'react'
import Button from '@components/Button'
import AuthForm from '../../../components/Form/AuthForm'
import Modal from '@components/Modal'
import { useModalContext } from '../../../contexts/ModalContext'
import { Link } from 'react-router-dom'
import { UseLogin } from '../../../hooks/UseAuth'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
    email: yup.string().email('Masukkan email yang valid').required('Email tidak boleh kosong'),
    password: yup.string().required('Password tidak boleh kosong').min(8, 'Minimal 8 karakter')
})

const loginForm = [
    { label: "Email", type: "email", action: "logEmail", name: "email" },
    { label: "Password", type: "password", action: "logPassword", name: "password" }
]

function Login() {
    const { loginSubmit, disable, logRes, logErr } = UseLogin()
    // console.log(disable)
    const modalContext = useModalContext()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched"
    })

    return (
        <div className="flex flex-col flex-auto justify-center items-center font-fonarto space-y-3 bg-white rounded-bl-3xl md:rounded-bl-none md:rounded-tr-3xl rounded-br-3xl p-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl">Login</h2>
            <form action="" className="space-y-2" onSubmit={handleSubmit(loginSubmit)}>
                {loginForm.map((inputs) => (
                    <AuthForm
                        key={inputs.label}
                        label={inputs.label}
                        type={inputs.type}
                        name={inputs.name}
                        error={errors}
                        register={register}
                        disabled={disable}
                        required
                    />
                ))}
                <input id="submitForm" type="submit" className="hidden" />
                <div className="w-full flex justify-end pt-4 font-lato">
                    <Link to="/verification" className="text-xs md:text-md text-blue-500 hover:underline hover:text-blue-800">Kirim ulang email verifikasi</Link>
                </div>
            </form>
            <div className="pt-4 ">
                <Button
                    text="Login"
                    color="yellow"
                    disabled={disable}
                    onClick={() => {
                        document.getElementById('submitForm').click()
                    }}>
                </Button>
            </div>
            {logErr ? (
                <Modal
                    isOpen={modalContext.isOpenState}
                    openModal={modalContext.openModalDispatch}
                    closeModal={modalContext.closeModalDispatch}
                    onClick={() => {
                        modalContext.closeModalDispatch()
                    }}
                    title={logErr.title}
                >
                    <h6 className="text-paragraph-2 text-black">
                        {logErr.content}
                    </h6>
                </Modal>
            ) : (
                <>
                    {logRes === undefined ? null : (
                        <Modal
                            isOpen={modalContext.isOpenState}
                            openModal={modalContext.openModalDispatch}
                            closeModal={modalContext.closeModalDispatch}
                            onClick={() => {
                                modalContext.closeModalDispatch()
                            }}
                            title={logRes.title}
                        >
                            <h6 className="text-paragraph-2 text-black">
                                {logRes.content}
                            </h6>
                        </Modal>
                    )}
                </>
            )}
        </div>
    )
}

export default Login
