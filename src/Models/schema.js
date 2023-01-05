const { Schema, model } = require("mongoose");
const validator = require("validator");

const Reduxloginform = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please provide your email "],
    unique: [true, "Email id is present already"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new error("invalid Email");
      }
    },
  },
  password: {
    type: String,
    min: [6, "Must be at least 6 "],
    max: 12,
  },
});

module.exports = model("Reduxlogin", Reduxloginform);
