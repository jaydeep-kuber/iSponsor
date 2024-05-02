const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

// const Joi = require("joi");
// const passwordComplexity = require("joi-password-complexity");

// create a schema
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String,  required: true, unique: true },
    password: { type: String, required: true }, // hash 
})

const User = mongoose.model('user', userSchema);

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

// const validate = (data) => {
// 	const schema = Joi.object({
// 		firstName: Joi.string().required(),
// 		lastName: Joi.string().required(),
// 		email: Joi.string().email().required(),
// 		password: passwordComplexity().required(),
// 	});
// 	return schema.validate(data);
// };

module.exports = { User };