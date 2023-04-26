const express = require('express');
const path = require("path");
const router = require("./UserRoutes");
const app=express();
const port=4000;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1", router);

// app.get("/api/v1/userdata", (req, res) => {
//    res.sendFile(path.join(__dirname + "/index.html"));
//   // res.json({
//   //     name:"Ridis",
//   //     email:"rohandle@gmail.com",
//   //     password:"fdofj",
//   // });
//   });
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
  });
  app.post("",);
  // app.post("/api/v1/register", (req, res) => {
  //   const userName= req.body.userName;
  //   const userEmail= req.body.email;
  //   const userPassword= req.body.password;
  //     res.json({
  //       success: true,
  //       // name:userName,
  //       // email:userEmail,
  //       // password:userPassword,
  //     })
  // })
  // app.post("/api/v1/login", (req, res) => {
  //   res.send(`<h1>DONE Mr.${req.body.name}</h1>
  //              <h2>Your email is.${req.body.email}</h2>
  //              <h2>Your password is.${req.body.password}</h2>`);
  //   console.log(req.body);
  // })
  // app.get("/about", (req, res) => {
  //   res.send("<h1>About page</h1>");
  // });
  // app.get("/contact", (req, res) => {
  //   res.send("<h1>Contact page</h1>");
  // });
app.listen(port,()=>{
  console.log(`Server is working on ${port}`);
});

//create-post  read-get update-put delete-delete
//Rest (Representational State Transfer) is an API that defines a set of
//functions that programmers can use to snd request and recieve responses
//using the http protocol method such as GET and POST 
