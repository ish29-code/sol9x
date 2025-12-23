import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { role, logout } = useContext(AuthContext);

    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-semibold text-gray-800">
                    MERN Dashboard
                </h1>

                <nav className="flex items-center gap-6">
                    {role === "admin" && (
                        <Link
                            to="/admin"
                            className="text-gray-600 hover:text-gray-900"
                        >
                            Admin
                        </Link>
                    )}

                    {role === "student" && (
                        <Link
                            to="/student"
                            className="text-gray-600 hover:text-gray-900"
                        >
                            Student
                        </Link>
                    )}

                    <button
                        onClick={logout}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-md text-sm"
                    >
                        Logout
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
