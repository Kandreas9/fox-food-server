import Dish from "../Model.mjs";

const dishGetAll = async (req, res) => {
	try {
		const dishes = await Dish.find();

		if (!dishes) {
			return res
				.status(404)
				.send({ success: false, error: "Dishes not found" });
		}

		res.status(200).send({ success: true, dishes });
	} catch (err) {
		res.status(500).send({ success: false, message: err.message });
	}
};

export default dishGetAll;
