import Navbar from "../components/Navbar";

const AdminDashboard = () => {
    return (
        <>
            <Navbar />

            <main className="bg-gray-100 min-h-screen p-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Admin Dashboard
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-lg font-medium text-gray-700">
                                Total Students
                            </h3>
                            <p className="text-3xl font-bold text-blue-600 mt-2">
                                128
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-lg font-medium text-gray-700">
                                Active Courses
                            </h3>
                            <p className="text-3xl font-bold text-green-600 mt-2">
                                6
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-lg font-medium text-gray-700">
                                Pending Requests
                            </h3>
                            <p className="text-3xl font-bold text-orange-500 mt-2">
                                4
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold mb-4">
                            Student Management
                        </h3>
                        <p className="text-gray-600">
                            Admin can add, edit, delete students and manage enrollments.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default AdminDashboard;
