const User = require("./models/User");

module.exports = {
  getUserById(call, callback) {
    const { id } = call.request.user;

    User.findById(id, (err, user) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, { user });
      }
    });
  },
  registerUser(call, callback) {
    const { email, username, password } = call.request.user;

    User.create(
      {
        email,
        username,
        password,
      },
      (err, user) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, { user });
        }
      }
    );
  },
  loginUser(call, callback) {
    const { email, password } = call.request.user;

    User.findOne({ email }, (err, user) => {
      if (err) {
        callback(err, null);
      } else {
        if (user) {
          user.compareHash(password, (err, res) => {
            if (res) {
              callback(null, { token: User.generateToken({ id: user._id }) });
            } else {
              callback(null, null);
            }
          });
        } else {
          callback(null, null);
        }
      }
    });
  },
};
