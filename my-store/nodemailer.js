
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendMail() {


  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: true, // true for 465, false for other ports
    port: 465,
    auth: {
      user: 'juangamerospina@gmail.com',
      pass: 'lyxamtsdpqofhcoo'
  }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'savion.donnelly45@ethereal.email', // sender address
    to: "juanhoyos1347@gmail.com", // list of receivers
    subject: "Hackermaaaaaan ✔", // Subject line
    text: "Desde el NODEJS", // plain text body
    html: "<b>Hackermannnn?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

sendMail();
