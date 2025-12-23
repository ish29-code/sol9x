import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../api/axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const { login } = useContext(AuthContext);

    const submit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/auth/login", form);
            login(res.data.token, res.data.role);
            toast.success("Login successful");
        } catch (err) {
            toast.error(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={submit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-2 mb-3"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-2 mb-4"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />

                <button className="w-full bg-blue-600 text-white py-2 rounded">
                    Login
                </button>

                <p className="text-sm text-center mt-4">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-blue-600">Sign up</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
