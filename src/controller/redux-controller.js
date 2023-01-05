const Reduxlogin = require("../Models/schema");
const bcrypt = require("bcrypt");

const createData = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    console.log("hashPassword");

    const hashPassword = await bcrypt.hash(password.toString(), 10);
    console.log("hashPassword", hashPassword);

    await new Reduxlogin({
      name,
      email,
      password: hashPassword,
    }).save();
    res.status(200).send({
      status: 200,
      data: {
        name,
        email,
        password,
      },
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error);
  }
};
module.exports = {
  createData,
};
