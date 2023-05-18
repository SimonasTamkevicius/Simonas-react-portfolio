const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Route for handling form submissions
app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-email@example.com',
      pass: 'your-email-password',
    },
  });

  // Configure the email message
  const mailOptions = {
    from: email,
    to: 'your-destination-email@example.com',
    subject: 'New Message from Contact Form',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
