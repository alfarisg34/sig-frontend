import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useContext,useState } from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ModalContext } from "../../../context/ModalContext";
import { Modals } from "../../../components/constant/Modals/index";
import authAPI from "../../../api/authAPI";
import { AdminContext } from "../../../context/AdminContext";
import Alert from '../../../components/elements/Alert';
import styles from './styles.module.css';

const schema = yup.object().shape({
	username: yup.string().required("Username is required"),
	password: yup.string().required("Password is Required"),
});

export default function LoginPage() {
	const { modal, setModal } = useContext(ModalContext);
	const { admin, setAdmin } = useContext(AdminContext);

	const [alert, setAlert] = useState(false);
	const [message, setMessage] = useState('');

	const onSubmitHandlerCallback = async (data) => {
		try {
			const res = await authAPI.login(data);
			if(res.data.success){
				setAdmin(res.data.data);
				setAlert(false);
				<Navigate to="/admin/dashboard" />
			}
			} catch (error) {
			setMessage(error.response.data.message)
			setAlert(true)
			}
	  };
	
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: "onTouched",
	});
	const clickOke = () => {
		setModal(false);
	};

  return (
	<>
	<section className="vh-100" style={{'backgroundColor': '#508bfc'}}>
		<div className="d-flex p-4">
			<div className="row justify-content-start">
				<div className="col">
					<a href="/map">
						<FontAwesomeIcon icon={faArrowLeft} className="text-dark" />
					</a>
				</div>
				<div className="col fw-bold">
					<p>Kembali</p>
				</div>
			</div>	
		</div>
		{alert && (
          <Alert className={styles.alert} message={message} />
        )}
		<div className="container py-5 h-95">
			<div className="row d-flex justify-content-center align-items-center h-100">
				<div className="col-12 col-md-8 col-lg-6 col-xl-5">
					<div className="card shadow-2-strong" style={{'borderRadius': '1rem'}}>
						<div className="card-body p-5 text-center">
							<h3 className="mb-5">Log In</h3>
							<form
								onSubmit={handleSubmit(onSubmitHandlerCallback)}
								autoComplete="off"
							>
								<div className="form-outline mb-4">
									<input
										type="text"
										placeholder="Username"
										className={`form-control form-control-lg ${
											errors.username ? "border border-danger" : "border border-dark"
										}`}
										{...register("username")}
									/>
								</div>
								<div className="text-danger mb-4">
									{errors.username && errors.username.message}
								</div>
								<div className="form-outline mb-4">
									<input
										type="password"
										placeholder="Password"
										className={`form-control form-control-lg ${
											errors.password ? "border border-danger" : "border border-dark"
										}`}
										{...register("password")}
									/>
								</div>
								<div className="text-danger mb-4">
									{errors.password && errors.password.message}
								</div>
								<button className="btn btn-primary btn-lg mb-4" type="submit">LOG IN</button>
							</form>
							<Modals
								title="Wrong Combination"
								description="Please insert the correct combination."
								isOpen={modal}
								onClickConfirm={clickOke}
								closeModal={clickOke}
							/>
						</div>
					
					</div>
				</div>
			</div>
			{admin && <Navigate to="/admin/dashboard" />}
		</div>
	</section>
</>
  )
}
