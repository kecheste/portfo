if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const FRONT_URL = process.env.FRONT_URL || "http://localhost:3000";

const corsOptions = {
  origin: FRONT_URL,
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    console.error("Bad JSON");
    return res
      .status(400)
      .json({ success: false, message: "Invalid JSON payload" });
  }
  next();
});

app.use("/", router);

const username = process.env.EMAIL_USER;
const password = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: username,
    pass: password,
  },
});

router.post("/contact", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", FRONT_URL);
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );

  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  transporter
    .sendMail({
      to: "aben.ezer443@gmail.com",
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
    })
    .then(() => {
      console.log("Email sent");
    })
    .catch((err) => {
      console.error(err);
    });

  return res.status(200).json({
    success: true,
    message: "Email sent successfully!",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Listening on port 5000");
});
