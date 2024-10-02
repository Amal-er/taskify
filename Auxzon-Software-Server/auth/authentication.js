const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Model/user.model');
const upload = require('../Middleware/Multer');
const SECRET_KEY = 'supersecretkey123';

exports.Login= async (req, res) => {
  const { email, password } = req.body;

  
     const user = await User.findOne({ useremail:email });
      
     if (!user) {
          return res.status(400).json({ message:'Invalid username'});
      }
       const isMatch = await bcrypt.compare(password, user.userpassword);
      if (!isMatch) {
          return res.status(400).json({message: 'Invalid  password'});
      }
      currentuserid=user.id

      const token = jwt.sign({email},SECRET_KEY);

      res.status(200).json({currentuserid, token });
  };







