const Joi = require('joi');

const validateUserInput = async (req, res, next) => {
  const schema = Joi.object({
    user_name: Joi.string().required(),
    email: Joi.string().email().required(),
    date_of_birth: Joi.date().required(),
  });

  try {
    await schema.validateAsync(req.body, { abortEarly: true });
    next();
  } catch (err) {
    return res.status(422).json({
      error: true,
      message: err.message,
    });
  }
};

module.exports = validateUserInput;
