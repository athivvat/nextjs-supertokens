"use client";

import { useState } from "react";
import { signIn } from "supertokens-auth-react/recipe/emailpassword";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      let response = await signIn({
        formFields: [
          { id: "email", value: form.email },
          { id: "password", value: form.password },
        ],
      });

      if (response.status === "WRONG_CREDENTIALS_ERROR") {
        setError("Incorrect email or password.");
      } else {
        router.push("/dashboard"); // Redirect after login
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-96 p-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-black">Login</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-black">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-black">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-md text-black"
            required
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
}
