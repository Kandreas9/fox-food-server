const userLogout = async (req, res) => {
	try {
		req.user.tokens = req.user.tokens.filter((token) => {
			return token.token !== req.token;
		});
		await req.user.save();

		res.status(200).send({ success: true, message: "Logout succesfull" });
	} catch (err) {
		res.status(500).send({ success: false, message: err.message });
	}
};

export default userLogout;
