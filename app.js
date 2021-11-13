const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("./models/course");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "Node.js with Mongodb running",
  });
});

const StudentRoutes = require("./routes/student");

app.use("/api/student", StudentRoutes);

const DB_URL =
  "mongodb+srv://admin:fLJOSSExZUDXyNWy@cluster0.woyfv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(DB_URL, (err) => {
  if (err) {
    console.log(err);
    // Stop Node.js App
    process.exit(0);
  }
  console.log("Mongoose Connected.");
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log("Express is running on PORT", PORT);
  });
});
