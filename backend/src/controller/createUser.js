const UserModel = require("./../model/UserModel");

const createUser = async (req, res) => {
  try {
    console.log("req body---->",req.body)
    const { phone, email, name, address, password } = req.body;
    let user = new UserModel();
    user.phone = phone;
    user.email = email;
    user.name = name;
    user.address = address;
    user.password = password;
    user.save(function (err, user) {
      if (err) {
        throw new Error(err);
      } else {
        console.log("user--->",user)
        res.status(200).json({
          status: 200,
          message: "User created successfully",
          data: user,
        });
      }
    });
  } catch (err) {
    console.log("inside the error block")
    res.status(403).json({
      status: 403,
      message: "Unable to create user",
    });
  }
};

module.exports = { createUser };
