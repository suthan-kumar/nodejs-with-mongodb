// Maps URL -> Controller
const Router = require("express").Router();
const StudentController = require("../controllers/student");

// CREATE -> POST
Router.route("/").post(StudentController.createStudent);

// READ -> GET
Router.route("/").get(StudentController.getStudents);
Router.route("/:id").get(StudentController.findStudentById);

// UPDATE -> PUT or PATCH
Router.route("/:id").put(StudentController.updateStudent); // Replaces entire object
Router.route("/:id").patch(StudentController.updateStudent); // For minor changes

// DELETE -> DELETE
Router.route("/:id").delete(StudentController.deleteStudent);

module.exports = Router;
