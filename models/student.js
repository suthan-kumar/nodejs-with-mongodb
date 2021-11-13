const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 1,
    max: 100,
  },
  place: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
  },
  course: {
    required: true,
    type: Schema.Types.ObjectId,
    ref :"Course"
  },
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
