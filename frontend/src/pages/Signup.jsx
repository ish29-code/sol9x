// pages/Signup.jsx
import { useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Signup = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        role: "student",
    });

    const submit = async (e) => {
        e.preventDefault();
        try {
            await api.post("/auth/signup", form);
            toast.success("Verification email sent. Please check your inbox.");
            setForm({ name: "", email: "", password: "", role: "student" });
        } catch (err) {
            toast.error(err.response?.data?.message || "Signup failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={submit}
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-semibold text-center mb-6">
                    Create an account
                </h2>

                <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <input
                        required
                        placeholder="Your name"
                        value={form.name}
                        className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                    />
                </div>

                <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        required
                        value={form.email}
                        placeholder="you@example.com"
                        className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                    />
                </div>

                <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                        type="password"
                        required
                        value={form.password}
                        placeholder="••••••••"
                        className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-sm font-medium mb-1">Role</label>
                    <select
                        value={form.role}
                        className="w-full border rounded-md px-3 py-2"
                        onChange={(e) =>
                            setForm({ ...form, role: e.target.value })
                        }
                    >
                        <option value="student">Student</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                >
                    Sign Up
                </button>

                <p className="text-sm text-center mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Signup;
