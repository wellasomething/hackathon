const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const users = [
  { email: "johnny001@email.com", password: "12345678" },
  { email: "janet001@email.com", password: "567891011" }, 
];

app.post("/", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (u) => u.email === `${email}` && u.password === `${password}`
  );
  if (user) {
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
  

});





// const express = require('express');
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
// const app = express();
// const cors = require('cors');

// app.use(cors());
// app.use(bodyParser.json());



// // Regular expression for email validation
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//  // Regular expression for password validation
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>/?]).{8,}$/;

// app.post('/login', (req, res) => {
//   const { email, password } = req.body;
  

//    // Validate the email format
//    if (!emailRegex.test(email)) {
//     res.status(400).send('Invalid email format');
//     return;
//   };

//     // Validate the password format
//     if (!passwordRegex.test(password)) {
//       res.status(400).send('Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, 1 special character, and be at least 8 characters long');
//       return;
//     }

//     // var emailPass = [{mail:"bimpe@email.com", "pass: "Password123$"},]
//   // Authenticate the user
//   if (email === 'bimpe@email.com' && password === 'Password123$') {
//     const token = jwt.sign({ email }, 'secret_key');
//     res.send({ token, message:"Welcome" });
//   } else {
//     res.status(404).send('Invalid credentials');
    
//   }
// });

//calculating the total amount saved by a user
app.post('/accomodation', (req, res)=>{
  const inputValue = req.body.inputValue;
  const totalBalance = 100;

  //performing percentage computation
  const amountSaved = (inputValue/100) * totalBalance;

  //sending the result back to the frontend
  res.send({amountSaved});

  //deduction percentage chosen every 24hrs
  // function frequency(){

  //   const toBeDeducted = amountSaved;
    
  // // Log the deduction result
  // console.log(`Deducted ${toBeDeducted} from ${totalBalance}.`);
  // return toBeDeducted;
  // };

  // Set start date and end date for the event
const startDate = new Date('2023-04-10'); // Example start date: April 10, 2023
const endDate = new Date('2023-04-20');

function scheduleDeduction() {

  // Get current date
  const currentDate = new Date();

  // Check if current date is within the range of start date and end date
  if (currentDate >= startDate && currentDate <= endDate) {

    // Perform deduction logic here
    const toBeDeducted = amountSaved;

    // Log the deduction result
    console.log(`Deducted ${toBeDeducted} on ${currentDate.toDateString()}`);

  const daily = 24 * 60 * 60 * 1000;
  const weekly = 7 * 60 * 60 * 24 * 1000;
  const monthly = 4 * 7 * 60 * 60 * 24 * 1000;
  setTimeout(() => {
    // frequency();
    scheduleDeduction(); // Schedule the next run after 24 hours
  }, daily, weekly, monthly);
  }
  else{
    console.log('Event has ended.');

  }
};
scheduleDeduction();




});



const port = 3000
app.listen(port, () => {
  console.log('Server started on port 3000');
});