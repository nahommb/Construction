const ex = require('express')
const app = ex()
const bdy = require('body-parser')
const mongoose = require('mongoose')
const home = require('./routes/home')
const cors = require('cors')
const nodemailer = require('nodemailer')

app.use(ex.json())

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
mongoose.connect('mongodb://127.0.0.1:27017/iconstruction')
app.use('/',home)


 
app.get('/',)



app.listen(3001,function(){
    console.log('running on port 3001')
})