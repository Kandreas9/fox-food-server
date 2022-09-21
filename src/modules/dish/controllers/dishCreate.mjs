import Dish from "../Model.mjs";

const dishCreate = async (req, res) => {
	const dish = new Dish(req.body);

	try {
		await dish.save();

		res.status(201).send({ success: true, dish });
	} catch (err) {
		res.status(500).send({ success: false, message: err.message });
	}
};

export default dishCreate;
