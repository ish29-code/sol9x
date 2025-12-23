import Student from "../models/Student.js";

// ADMIN – GET STUDENTS (PAGINATION)
export const getStudents = async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = 5;

    const students = await Student.find()
        .skip((page - 1) * limit)
        .limit(limit);

    res.json(students);
};

// ADMIN – ADD STUDENT
export const addStudent = async (req, res) => {
    const student = await Student.create(req.body);
    res.json(student);
};

// ADMIN – UPDATE STUDENT
export const updateStudent = async (req, res) => {
    const student = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(student);
};

// ADMIN – DELETE STUDENT
export const deleteStudent = async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
};

// STUDENT – UPDATE OWN PROFILE
export const updateMyProfile = async (req, res) => {
    const student = await Student.findOneAndUpdate(
        { user: req.user.id },
        req.body,
        { new: true }
    );
    res.json(student);
};
