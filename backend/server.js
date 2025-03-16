require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is up and running 🚀");
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Email transporter error:", error);
  } else {
    console.log("✅ Email transporter ready");
  }
});
app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Contact Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    replyTo: email,
  };
  const userMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thankyou for contacting me!",
    text: `⁠Hello ${name},\n\nThank you for reaching out! I have received your message and will get back to you as soon.\n\nBest Regards,\nVenkatesh`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("❌ Error sending email to owner:", error);
      return res.status(500).json({ error: "Failed to send message. Please try again later." });
    }
    // Send auto-response to user
    transporter.sendMail(userMailOptions, (err, info2) => {
      if (err) {
        console.error("⚠️ Error sending auto-reply:", err);
      }
    });
    return res.status(200).json({ success: "Message sent successfully!" });
  });
});
const PORT = process.env.PORT || 5001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});
