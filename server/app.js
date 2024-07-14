const ex = require('express')
const app = ex()
const bdy = require('body-parser')
const mongoose = require('mongoose')
const home = require('./routes/home')
const cors = require('cors')
const nodemailer = require('nodemailer')
const bdparser = require('body-parser')
const previousWork = require('./routes/adminrouts')
const session = require('express-session')
const cookies = require('cookie-parser')
const sessionController = require('./controller/sessionController')

app.use(bdparser.urlencoded({extended:true}))

app.use(ex.json())
app.use(ex.static('public'))
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'backupmilano27@gmail.com', // replace with your Gmail address
//       pass: 'danayitlove' // replace with your Gmail password or app-specific password
//     }
//   });
  

//   const sendEmail = async (to, subject, text) => {
//     try {
//       const info = await transporter.sendMail({
//         from: '"Sender Name" leeopia11@gmail.com', // sender address
//         to, // list of receivers
//         subject, // Subject line
//         text, // plain text body
//         // html: "<b>Hello world?</b>" // html body (optional)
//       });
//       console.log('Message sent: %s', info.messageId);
//     } catch (error) {
//       console.error('Error sending email:', error);
//     }
//   };


//   app.post('/send-email', async (req, res) => {
//     const { to, subject, text } = req.body;
//     try {
//       await sendEmail(to, subject, text);
//       res.send('Email sent successfully!');
//     } catch (error) {
//       res.status(500).send('Error sending email');
//     }
//   });



app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true // Allow credentials (cookies) to be sent and received
}));

app.use(bdy.urlencoded({extended:true}));

 
app.use(cookies())  
app.use(session({
    key:'userId', 
    secret:'lee',
    resave:false,
    saveUninitialized:false,
    cookie:{
        expires:60*60*10000
    },  
}))



mongoose.connect('mongodb://127.0.0.1:27017/iconstruction')
app.use('/',home)
app.use('/admin',previousWork)



app.get('/session',sessionController)
app.get('/',)










app.post('/payment-success', async (req, res) => {
    const { tx_ref } = req.body;
  
    try {
      const response = await axios.get(`https://api.chapa.co/v1/transaction/verify/${tx_ref}`, {
        headers: {
          Authorization: `Bearer CHAPUBK_TEST-SViRXlP2rAnkzObtyzB5UIN5Ymj9QqhX`, // Replace with your Chapa API key
        },
      });
  
      if (response.data.status === 'success') {
        // Handle successful payment
        res.json({ message: 'Payment successful', data: response.data });
      } else {
        // Handle failed payment
        res.status(400).json({ message: 'Payment verification failed' });
      }
    } catch (error) {
      console.error('Error verifying payment:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });













app.listen(3001,function(){
    console.log('running on port 3001')
}) 