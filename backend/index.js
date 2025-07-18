const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());

app.use(express.json());
const PORT = 3001;


const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use any email service
//   host: 'smtp.gmail.com',
//   port: 587,    
//   secure: false, 
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS // Your password or app password
  }
});

app.get('/',(req,res)=>{
    res.send('SERVER RUNNING NOW');
})

// POST endpoint for form submission
app.post('/contact', async (req, res) => {
    console.log("<---response at end point--->",req.body);
    
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email, // sender
    to: 'ayushdce2@gmail.com', // receiver
    subject: 'New Contact Form Submission',
    html: `<h3>New Contact Form Submission</h3>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong><br/>${message}</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Something went wrong.',error);
    } else {
      console.log('Email sent:', info.response);
      res.send('Thank you for contacting me! I will get back to you shortly.',info.response);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT} `);
});
