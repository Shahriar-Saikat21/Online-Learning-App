import { check, validationResult } from "express-validator";

import connection from "../Middleware/dbConnect.js";

export const addUserValidators = [
  check("userName")
    .isLength({ min: 1 , max: 50})
    .withMessage("Name is required at least 1 character long & max 50 characters long")
    .trim(),
  check("userEmail")
    .isEmail()
    .withMessage("Invalid email address")
    .normalizeEmail()
    .custom(async email => {
      const value = await isEmailInUse(email);
        if (value) {
            throw new Error('Email is already exists!!!');
        }
      }),
  check("userPassword")
    .isStrongPassword()
    .withMessage("Password must be at least 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbol"),
];

export const addUserValidationHandler = function (req, res, next) {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();
  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    if(mappedErrors.userName){
      res.json({ message: mappedErrors.userName.msg, success: false });
    }else if(mappedErrors.userEmail){
      res.json({ message: mappedErrors.userEmail.msg, success: false });
    }else if(mappedErrors.userPassword){
        res.json({ message: mappedErrors.userPassword.msg, success: false });
    }
  }
};

function isEmailInUse(email){
  return new Promise((resolve, reject) => {
    connection.query('SELECT COUNT(*) AS total FROM users WHERE user_email = ?', [email], function (error, results, fields) {
      if(!error){
              console.log("EMAIL COUNT : "+results[0].total);
              return resolve(results[0].total > 0);
          } else {
              return reject(new Error('Database error!!'));
          }
        }
      );
  });
}

