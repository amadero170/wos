"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";


export default function RegisterForm() {
	const [loading, setLoading] = useState(false);

	async function handleSubmit(event: any) {
		event.preventDefault();
		setLoading(true);

        const data = {
			name: String(event.target.name.value),
			email: String(event.target.email.value),
			password: String(event.target.password.value),
			password2: String(event.target.password2.value),
			
		};

		const response = await fetch("/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (response.ok) {
			console.log("Message sent successfully");
			setLoading(false);
			// reset the form
			event.target.name.value = "";
			event.target.email.value = "";
			event.target.password.value = "";
			event.target.password2.value = "";
            signIn()
		}
		if (!response.ok) {
			console.log("Error sending message");
			setLoading(false);
		}
	}
	return (
		<form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-lg">
  <div className="w-full my-4">
    <input
      type="text"
      minLength={3}
      maxLength={150}
      required
      autoComplete="off"
      id="name"
      placeholder="Nombre Completo"
      className="text-black p-4 bg-transparent border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
    />
  </div>

  <div className="w-full my-4">
    <input
      type="email"
      minLength={5}
      maxLength={150}
      required
      autoComplete="off"
      id="email"
      placeholder="Correo electrónico"
      className="text-black p-4 bg-transparent border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
    />
  </div>

  <div className="w-full my-4">
    <input
      type="password"
      minLength={3}
      maxLength={150}
      required
      autoComplete="off"
      id="password"
      placeholder="Contraseña"
      className="text-black p-4 bg-transparent border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
    />
  </div>

  <div className="w-full my-4">
    <input
      type="password"
      minLength={3}
      maxLength={150}
      required
      autoComplete="off"
      id="password2"
      placeholder="Confirmar Contraseña"
      className="text-black p-4 bg-transparent border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
    />
  </div>

  <button
    type="submit"
    disabled={loading}
    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-700"
  >
    Registrarme
  </button>
</form>

	);
}