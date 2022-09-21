import Dish from "../Model.mjs";

const dishGetById = async (req, res) => {
	const id = req.params.id;

	try {
		const dish = await Dish.findById(id);

		if (!dish) {
			return res
				.status(404)
				.send({ success: false, error: "Dish not found" });
		}

		res.status(200).send({ success: true, dish });
	} catch (err) {
		res.status(500).send({ success: false, message: err.message });
	}
};

export default dishGetById;
