// const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");


async function handleLogin(req , res){
    try {
		const { error } = validate(req.body);

		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password,			
		);

		console.log('password validity checked..');

		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });
		console.log('password matched...');
		
		const token = User.generateAuthToken();
		console.log('tocken generated...');
		
		res.status(200).send({ data: token, message: "logged in successfully" });

	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}

}

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

async function handleRegister(req , res){
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
}

async function handleReg(req , res){

	const {firstName , lastName, email, password} = req.body
	const { error } = validate(req.body);
	if (error) return res.status(400).send({ message: error.details[0].message });

	const user = await User.findOne({ email: req.body.email });
	if (user)
		return res
			.status(409)
			.send({ message: "User with given email already Exist!" });
	const newUser = await new User.create({...req.body,password: await bcrypt.hash(password, 8)}).save()
	return setResponse(res, 200, 'S', 'Successfully created', {newUser})
}

module.exports = {
    handleLogin,
    handleRegister,
	handleReg
}