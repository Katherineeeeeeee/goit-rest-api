const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const { User } = require("../../models/user");
const { RequestError, sendMail } = require("../../helpers");

const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { password, email } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const avatarURL = gravatar.url(email);

  const verificationToken = nanoid();

  const newUser = await User.create({
    password: hashPassword,
    email,
    avatarURL,
    verificationToken,
  });

  const mail = {
    to: email,
    subject: "Confirm registration on the site",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Click to confirm registration</a>`,
  };

  await sendMail(mail);

  res.status(201).json({
    email: newUser.email,
    password: newUser.password,
    subscription: newUser.subscription,
    verificationToken: newUser.verificationToken,
  });
};

module.exports = register;
