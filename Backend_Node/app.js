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


//calculating the total amount saved by a user
app.post('/accomodation', (req, res)=>{
  const inputValue = req.body.inputValue;
  const totalBalance = req.body.balance;

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

//check the frequency, date money should be deducted
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