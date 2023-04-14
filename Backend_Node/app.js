const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(express.static('angular/frontend-angular'))




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
let totalBalance = 100000;

//Initialize Target amount
let targetAmount= 0;

//Initialized Amount saved
let amountSaved = 0;

let interestEarned = 0;

// app.post('/savings', (req, res) => {
//   const newTotalBalance = parseFloat(req.body.totalBalance);

//   // Check if the parsed value is a valid number
//   if (isNaN(newTotalBalance)) {
//     return res.status(400).json({ message: 'Invalid totalBalance value' });
//   }

//     // Add the new value to the existing totalBalance value
//     totalBalance += newTotalBalance;

//   // Send a response back to the client
//   res.status(200).json({ message: 'Total balance updated successfully' });
// });

// Define a route that sends the value to the frontend
app.get('/create-savings', (req, res) => {
  res.json({ value: totalBalance });
});


// Define a route that sends the value to the frontend
app.get('/create-target', (req, res) => {
  
  // Retrieving the selectedPercentage value from the query parameters
  const selectedPercentage = Number(req.query.percentage);

  //calculating the total amount saved
   amountSaved = (selectedPercentage / 100) * targetAmount;
   

  // Send the computed amountSaved value as the response
  res.json({ value: amountSaved });
});



//calculating the total amount saved by a user

app.post('/create-target', (req, res)=>{
  
  const { percentage, frequency, startDate, endDate, termsAndConditions } = req.body;

  const newTarget = req.body.targetAmount;

  // Check if the parsed value is a valid number
  if (isNaN(newTarget)) {
    return res.status(400).json({ message: 'Invalid totalBalance value' });
  }

  // Add the new value to the existing totalBalance value
  targetAmount = newTarget;


  // Set start date and end date for the event
 startDate = new Date(req.body.startDate); 
 endDate = new Date(req.body.endDate);


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
      const weekly = 7 * 24 * 60 * 60 * 1000;
      const monthly = 30 * 24 * 60 * 60 * 1000;
      setTimeout(() => {
        // frequency();
        scheduleDeduction(); // Schedule the next run after 24 hours
      }, daily, weekly, monthly); // Use daily or weekly or monthly as per your requirement
    } else {
      console.log('Event has ended.');

    }
  };
  scheduleDeduction();

  // Send a response back to the frontend
  res.json({ message: 'This certain amount will be deducted from your target' });

});

app.get('/savings-tracker', (req, res)=>{

  interestEarned = (5/100) * amountSaved;
  
    // Send the response with all the values
    res.json({ 
      targetAmount: targetAmount,
      amountSaved: amountSaved,
      interestEarned: interestEarned 
    });
});

app.post('/savings-tracker', (req, res) => {
 

  // Deduct 5% from the total balance
  const deduction = totalBalance * 0.05;
  totalBalance -= deduction;

  

  // Return the updated total balance as the response
  res.json({ totalBalance: totalBalance });
});



const port = 3000
app.listen(port, () => {
  console.log('Server started on port 3000');
});
