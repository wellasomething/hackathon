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


// Initialize totalBalance with an initial value
let totalBalance = 0;

app.post('/savings', (req, res) => {
  // Get the totalBalance value from the request body
  const newTotalBalance = req.body.totalBalance;

  // Update the totalBalance value
  totalBalance = newTotalBalance;

  // Send a response back to the client
  res.status(200).json({ message: 'Total balance updated successfully' });
});

// Define a route that sends the value to the frontend
app.get('/create-savings', (req, res) => {
  res.json({ value: totalBalance });
});


// Define a route that sends the value to the frontend
app.get('/create-target', (req, res) => {
  
  // Retrieving the selectedPercentage value from the query parameters
  const selectedPercentage = Number(req.query.percentage);

  //calculating the total amount saved
  const amountSaved = (selectedPercentage / 100) * totalBalance;

  // Send the computed amountSaved value as the response
  res.json({ value: amountSaved });
});



//calculating the total amount saved by a user
app.post('/create-target', (req, res)=>{
  
  
  totalBalance = req.body.totalBalance;
 

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

