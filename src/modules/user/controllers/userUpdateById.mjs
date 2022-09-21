import User from "../Model.mjs";

const userUpdateById = async (req, res) => {
	const id = req.params.id;
	const updates = Object.keys(req.body);

	try {
		const user = await User.findById(id);

		if (!user) {
			return res
				.status(404)
				.send({ success: false, error: "User not found" });
		}

		updates.forEach((update) => (user[update] = req.body[update]));
		await user.save();

		res.status(200).send({ success: true, user });
	} catch (err) {
		res.status(500).send({ success: false, error: err.message });
	}
};

export default userUpdateById;
