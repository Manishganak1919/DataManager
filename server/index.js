const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const ConnectDB = require("./MongoDB/db.js");
const UserModel = require("./Models/userModel.js");
//configuration of dotenv
dotenv.config();
const app = express();

//middleware
app.use(cors());
app.use(express.json()); // frontend se bakend ka data ko json format mein bhejnae ke  liye
const PORT = process.env.PORT || 8080;
ConnectDB();

{
  /******Let's create an api ******/
}
/****this is frontend createUser */
app.use("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
{
  /******Let's create an api ******/
}
/****this is frontend User.jsx, use find methods to get all the records */
app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
/**update the api */
app.put("/updateUser/:id", (req, res) => {
  /**first of all get the id */
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name, email: req.body.email, age: req.body.age }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

{/****Delete the api */}

app.delete('/deleteUser/:id', (req, res)=>{
  /**First of all extract the user_id */
  const id = req.params.id;
  UserModel.findByIdAndDelete({_id: id})
  .then(res=> res.json(res))
  .catch(err=> res.json(err));
})

app.listen(PORT, () => {
  console.log(`server is listening to the port no ${PORT}`);
});
