// const express = require("express");
// const app = express();
// const cors = require("cors");
// const path = require('path');
// const mongoose = require('mongoose');

// const AuxzonRouter = require("./Routes/auxzon.router");

// app.use(cors({ origin: "http://localhost:5173" }));

// app.use(express.json());

// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// mongoose.connect(process.env.MONGODB_URL)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));
 

// app.use("/Auxzon", AuxzonRouter);

// app.listen(8000, () => {
//   console.log("server running...");
// });
const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const AuxzonRouter = require("./Routes/auxzon.router");

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use("/Auxzon", AuxzonRouter);

app.listen(8000, () => {
  console.log("server running...");
});
