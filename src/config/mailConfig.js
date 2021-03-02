import nodemailer from 'nodemailer'

// async..await is not allowed in global scope, must use a wrapper
async function send(sendInfo){
    console.log(sendInfo,'sendInfo')
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();
  console.log(testAccount,'test')

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: '913172755@qq.com', // generated ethereal user
      pass: 'wamymajinswabbjd', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <913172755@qq.com>', // sender address
    to: sendInfo.email, // list of receivers
    subject: `Hello ✔ ${sendInfo.email}`, // Subject line
    text: ``, // plain text body
    html: `您的验证码是${sendInfo.code},验证码将在20分钟后过期`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
export default send