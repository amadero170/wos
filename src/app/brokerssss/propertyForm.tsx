// "use client";

// import { useState } from "react";
// import { useSession } from "next-auth/react";

// export default function PropertyForm() {
// 	const [loading, setLoading] = useState(false);
//     const {data:session} = useSession()

// 	async function handleSubmit(event: any) {
// 		event.preventDefault();
// 		setLoading(true);

// 		const data = {
// 			nombre: String(event.target.nombre.value),
//             tipo: String(event.target.tipo.value),
//             user: String(session?.user?.email)
// 		};

// 		const response = await fetch("/api/property", {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify(data),
// 		});

// 		if (response.ok) {
// 			console.log("Message sent successfully");
// 			setLoading(false);
// 			// reset the form
// 			event.target.nombre.value = "";
// 			event.target.tipo.value = "";

// 		}
// 		if (!response.ok) {
// 			console.log("Error sending message");
// 			setLoading(false);
// 		}
// 	}
// 	return (
// 		<form onSubmit={handleSubmit} className="w-full sm:w-[600px] lg:w-[780px] rounded-xl px-2 sm:px-8  lg:px-20 py-20 bg-gradient-to-b from-[#309B9D] to-[#3087891C]">
// 			<h3 className="font-black text-3xl text-center">
// 				Ingresa una nueva propiedad
// 			</h3>
//             <h4>{session?.user?.name}</h4>

// 			<div className="w-full flex flex-col my-4">
// 				<input
// 					type="text"
// 					minLength={1}
// 					maxLength={150}
// 					required
// 					className="p-4 bg-transparent border border-[#AFFAFC] rounded-lg text-white"
// 					autoComplete="off"
// 					id="nombre"
// 					placeholder="Nombre de la propiedad"
// 				/>
// 			</div>
// 			<div className="w-full flex flex-col my-4">
// 				<input
// 					type="text"
// 					minLength={1}
// 					maxLength={40}
// 					required
// 					className="p-4 bg-transparent border border-[#AFFAFC] rounded-lg text-white"
// 					autoComplete="off"
// 					id="tipo"
// 					placeholder="Tipo"
// 				/>
// 			</div>

// 			<button
// 				type="submit"
// 				disabled={loading}
// 				className="px-4 py-2 w-full text-lg bg-[#FF4F8E] rounded-lg py-8 disabled:bg-gray-400 disabled:text-gray-100 text-white font-black mt-4">
// 				Agregar propiedad
// 			</button>
// 		</form>
// 	);
// }
