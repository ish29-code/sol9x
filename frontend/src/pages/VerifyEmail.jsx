import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";
import toast from "react-hot-toast";

const VerifyEmail = () => {
    const { token } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const verify = async () => {
            try {
                await api.get(`/auth/verify/${token}`);
                toast.success("Email verified successfully");
                navigate("/login");
            } catch {
                toast.error("Invalid or expired link");
            }
        };
        verify();
    }, [token, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            Verifying email...
        </div>
    );
};

export default VerifyEmail;
