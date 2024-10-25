import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
import { styles } from "../styles"

import MotionTranstion from "./MotionTransition.jsx"

const Contact = () => {

	const formRef = useRef()
	const [form, setForm] = useState({
		name: '',
		email: '',
	})
	const [loading, setLoading] = useState(false)

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({ ...form, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				"service_fb2vxve",
				"template_oghs4rs",
				{
					from_name: form.name,
					to_name: "Jorge",
					from_email: form.email,
					message: form.message,
					to_email: "jorgetejadolopez@gmail.com",
				},
				"HoUaVJll9lhvzBmRn"
			)
			.then(
				() => {
					setLoading(false);
					alert("Thank you. I will get back to you as soon as possible.");

					setForm({ name: "", email: "", message: ""})
				},
				(error) => {
					setLoading(false);
					console.error(error);

					alert("Ahh, something went wrong. Please try again.");
				}
			)
	}

	return (
		<>
		<MotionTranstion />
		<div className={`${styles.paddingX} ${styles.paddingY} flex flex-col w-full h-full overflow-hidden mt-24`}>

			<h3 className={`text-6xl xl:text-8xl font-tags flex flex-col items-center mb-3`}>
				CONTACTAME
			</h3>
			<p className="flex text-white/60 justify-center font-medium text-md mb-3">
				jorgetejadolopez@gmail.com
			</p>
			<a href="https://www.linkedin.com/in/jorge-tejado-l%C3%B3pez/" 
			className={`flex text-white/60 hover:text-accent underline xl:text-xl 
			capitalize font-medium text-sm justify-center mb-3`}>
				LinkedIn
			</a>


			<div className="mb-10"/>

			<form ref={formRef} onSubmit={handleSubmit} className="mb-10 text-white/50">
				<label className="flex flex-col mb-10 xl:ml-10 xl:translate-x-[30vw]">
					<p className="text-white/60 text-md font-regular mb-3 white">
						{`Rellena el formulario y te contestare lo antes posible:`}
					</p>
					<div className="h-[3rem] w-0.5 bg-white/50 ">
						<input 
							type="text" 
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="TU NOMBRE..."
							className="py-4 px-6 placeholder:text-white/50 bg-transparent font-regular outline-none"
						/>
					</div>
				</label>

				<label className='flex flex-col mb-10 xl:ml-10 xl:translate-x-[30vw]'>
					<div className="h-[3rem] w-0.5 bg-white/50">
						<input
							type='email'
							name='email'
							value={form.email}
							onChange={handleChange}
							placeholder="TU EMAIL..."
							className='py-4 px-6 placeholder:text-white/50 bg-transparent font-regular outline-none'
						/>
					</div>
				</label>

				<label className="flex flex-col xl:ml-10 xl:translate-x-[30vw]">
					<div className="h-[3rem] w-0.5 bg-white/50 ">
						<input 
							type="text" 
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="TU MENSAJE..."
							className="py-4 px-6 placeholder:text-white/50 bg-transparent font-regular outline-none"
						/>
					</div>
				</label>

				<div className="mt-[100px] flex flex-col items-center">
					<button
						type="submit"
						className="py-3 px-8 bg-[#38383e] opacity-45 hover:opacity-85
						outline-none w-fit text-white/80 font-homeSections font-medium"
					>
						{loading ? 'Enviando...' : 'Enviar'}
					</button>
				</div>

			</form>
		</div>
		</>
	)
}

export default Contact