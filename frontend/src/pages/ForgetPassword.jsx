import { useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        try {
            await api.post("/auth/forgot-password", { email });
            toast.success("Reset link sent if email exists");
        } catch {
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={submit}
                className="bg-white p-6 rounded-lg shadow w-96"
            >
                <h2 className="text-xl font-semibold mb-4">
                    Forgot Password
                </h2>

                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
                    Send Reset Link
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;
