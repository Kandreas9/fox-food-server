import User from "../Model.mjs";

const userLogin = async (req, res) => {
	try {
		const user = await User.findByCredentials(
			req.body.email,
			req.body.password
		);
		const token = await user.generateAuthToken();

		res.status(200).send({ success: true, admin, token });
	} catch (err) {
		res.status(500).send({ success: false, message: err.message });
	}
};

export default userLogin;
