const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());



// Regular expression for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 // Regular expression for password validation
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>/?]).{8,}$/;

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  

   // Validate the email format
   if (!emailRegex.test(email)) {
    res.status(400).send('Invalid email format');
    return;
  };

    // Validate the password format
    if (!passwordRegex.test(password)) {
      res.status(400).send('Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, 1 special character, and be at least 8 characters long');
      return;
    }

    // var emailPass = [{mail:"bimpe@email.com", "pass: "Password123$"},]
  // Authenticate the user
  if (email === 'bimpe@email.com' && password === 'Password123$') {
    const token = jwt.sign({ email }, 'secret_key');
    res.send({ token, message:"Welcome" });
  } else {
    res.status(404).send('Invalid credentials');
    
  }
});

const port = 7200
app.listen(port, () => {
  console.log('Server started on port 7200');
});