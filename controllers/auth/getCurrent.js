const getCurrent = async (req, res) => {
  const { email } = req.user;

  res.status(200).json({
    email,
  });
};

module.exports = getCurrent;
