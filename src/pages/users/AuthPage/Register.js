import React from 'react'
import Button from '@components/Button'
import AuthForm from '@components/Form/AuthForm'
import Modal from '@components/Modal'
import { UseRegister } from '../../../hooks/UseAuth'
import { useModalContext } from '../../../contexts/ModalContext'
import { useLoginPageContext } from '../../../contexts/LoginPageContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const FILE_SIZE = 2000000
const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/png"
]

const schema = yup.object().shape({
    nama: yup.string().required('Nama tidak boleh kosong'),
    email: yup.string().email('Masukkan email yang valid').required('Email tidak boleh kosong'),
    password: yup.string().required('Password tidak boleh kosong').min(8, 'Minimal 8 karakter'),
    confirmPassword: yup.string().required('Konfirmasi password tidak boleh kosong').oneOf([yup.ref("password"), null], "Password tidak sama"),
    institusi: yup.string().required('Institusi tidak boleh kosong'),
    telp: yup.string().required('Nomor telepon tidak boleh kosong').min(10, 'Minimal 10 karakter').max(12, 'Maksimal 12 karakter'),
    foto: yup.mixed().required('Foto tidak boleh kosong').test({
        message: "Tidak ada foto yang dipilih",
        test: arr => arr.length > 0
    }).test(
        "fileFormat",
        "Format tidak sesuai",
        value => value[0] && SUPPORTED_FORMATS.includes(value[0].type)
    ).test(
        "fileSize",
        "File terlalu besar. Maksimal 2MB.",
        value => value[0] && value[0].size <= FILE_SIZE
    )
})

const registerForm = [
    { label: "Nama", type: "text", name: "nama" },
    { label: "Email", type: "email", name: "email" },
    { label: "Password", type: "password", name: "password" },
    { label: "Konfirmasi Password", type: "password", name: "confirmPassword" },
    { label: "Institusi", type: "text", name: "institusi" },
    { label: "No. Tlp", type: "text", name: "telp" }
]

function Register() {
    const { registerSubmit, regRes, regErr, disable } = UseRegister()
    // console.log(disable)
    const modalContext = useModalContext()
    const loginPageContext = useLoginPageContext()
    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched"
    })

    const upload = watch("foto")

    return (
        <div className="flex flex-col justify-center items-center font-fonarto space-y-3 bg-white rounded-bl-3xl md:rounded-bl-none md:rounded-tr-3xl rounded-br-3xl p-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl">Register</h2>
            <form action="" className="space-y-2 " onSubmit={handleSubmit(registerSubmit)}>
                {registerForm.map((inputs) => (
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

                <div className="flex items-center justify-start space-x-3 ">
                    <h3 className="text-paragraph-2 2xl:text-lg flex-none w-1/4 items-center ">Foto</h3>
                    <div className=" ">
                        <Button text="Upload" disabled={disable} color="yellow" onClick={() => document.getElementById('uploadFile').click()} ></Button>
                        <input
                            id="uploadFile"
                            type="file"
                            className="hidden"
                            accept="image/*"
                            name="foto"
                            {...register("foto", { required: true })}
                        />
                        {errors.foto ? (
                            <p className="text-xs text-red-600 break-words">{errors.foto.message}</p>
                        ) : upload === undefined ? (
                            <p className="text-xs break-all">Belum ada foto yang dipilih</p>
                        ) : upload.length === 0 ? (
                            <p className="text-xs text-red-600 break-words">Tidak ada foto yang dipilih</p>
                        ) : (
                            <p className="text-xs break-all">{upload[0].name}</p>
                        )}

                    </div>
                </div>
                <input id="submitForm" type="submit" className="hidden" />
            </form>

            <div className="pt-8 ">
                <Button
                    text="Register"
                    color="yellow"
                    disabled={disable}
                    onClick={() => {
                        document.getElementById('submitForm').click()
                    }} >
                </Button>
            </div>

            {regErr ? (
                <Modal
                    isOpen={modalContext.isOpenState}
                    openModal={modalContext.openModalDispatch}
                    closeModal={modalContext.closeModalDispatch}
                    onClick={() => {
                        modalContext.closeModalDispatch()
                    }}
                    title={regErr.title}
                >
                    <h6 className="text-paragraph-2 text-black">
                        {regErr.content}
                    </h6>
                </Modal>
            ) : (
                <>
                    {regRes === undefined ? null : (
                        <Modal
                            isOpen={modalContext.isOpenState}
                            openModal={modalContext.openModalDispatch}
                            closeModal={() => {
                                if (regRes.status === 'success') {
                                    modalContext.closeModalDispatch()
                                    loginPageContext.loginPageDispatch()
                                } else {
                                    modalContext.closeModalDispatch()
                                }
                            }}
                            onClick={() => {
                                if (regRes.status === 'success') {
                                    modalContext.closeModalDispatch()
                                    loginPageContext.loginPageDispatch()
                                } else {
                                    modalContext.closeModalDispatch()
                                }
                            }}
                            title={regRes.title}
                        >
                            <h6 className="text-paragraph-2 text-black">
                                {regRes.content}
                            </h6>
                        </Modal>
                    )}
                </>
            )}
        </div>
    )
}

export default React.memo(Register)
