import Navbar from "../components/Navbar";

const StudentDashboard = () => {
    return (
        <>
            <Navbar />

            <main className="bg-gray-100 min-h-screen p-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Student Dashboard
                    </h2>

                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold mb-4">
                            My Profile
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-sm text-gray-500">Name</label>
                                <p className="font-medium text-gray-800">
                                    Ishika Deshpande
                                </p>
                            </div>

                            <div>
                                <label className="text-sm text-gray-500">Email</label>
                                <p className="font-medium text-gray-800">
                                    ishika@gmail.com
                                </p>
                            </div>

                            <div>
                                <label className="text-sm text-gray-500">Course</label>
                                <p className="font-medium text-gray-800">
                                    MERN Bootcamp
                                </p>
                            </div>

                            <div>
                                <label className="text-sm text-gray-500">
                                    Enrollment Date
                                </label>
                                <p className="font-medium text-gray-800">
                                    12 Aug 2025
                                </p>
                            </div>
                        </div>

                        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md">
                            Update Profile
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default StudentDashboard;
