import User from "../Model.mjs";

const userDeleteById = async (req, res) => {
	const id = req.params.id;

	try {
		const doc = await User.deleteOne({ _id: id });

		if (!doc.n) {
			return res
				.status(404)
				.send({ success: false, error: "User not found" });
		}

		res.status(200).send({ success: true, message: "User Deleted" });
	} catch (err) {
		res.status(500).send({ success: false, message: err.message });
	}
};

export default userDeleteById;
