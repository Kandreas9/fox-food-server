import User from "../Model.mjs";

const userGetById = async (req, res) => {
	const id = req.params.id;

	try {
		const user = await User.findById(id);

		if (!user) {
			return res
				.status(404)
				.send({ success: false, error: "User not found" });
		}

		res.status(200).send({ success: true, user });
	} catch (err) {
		res.status(500).send({ success: false, message: err.message });
	}
};

export default userGetById;
