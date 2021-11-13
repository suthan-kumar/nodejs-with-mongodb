const Student = require("../models/student");
// Business Logic

// Get All Students
/*exports.getStudents = (req, res) => {
  Student.find()
    .then((students) => {
      res.status(200).send(students);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};*/

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find()
      .select("name course")
      .sort("name")
      .populate("course");
    res.status(200).send(students);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get Student By Id
exports.findStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id).populate("course");
    if (!student) {
      return res.status(404).send({
        status: 404,
        success: false,
        message: "Student not found.",
      });
    }
    res.status(200).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Create new Student
exports.createStudent = async (req, res) => {
  try {
    const data = req.body;
    const student = await new Student(data).save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Update Student
exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await Student.findByIdAndUpdate(id, data, { new: true });
    //  const result = await Student.updateOne({_id : id}, data);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete Student
exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Student deleted.",
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
