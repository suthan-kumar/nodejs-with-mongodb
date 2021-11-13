const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
  },
});

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
