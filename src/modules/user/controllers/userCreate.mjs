import User from "../Model.mjs";

const userCreate = async (req, res) => {
	// email, password => required;
	const user = new User(req.body);

	try {
		await user.save();
		const token = await user.generateAuthToken();

		res.status(201).send({ success: true, user, token });
	} catch (err) {
		res.status(500).send({ success: false, message: err.message });
	}
};

export default userCreate;
