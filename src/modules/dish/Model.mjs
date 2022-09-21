import mongoose from "mongoose";

const Schema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		calories: {
			type: Number,
			required: true,
		},
		fat: {
			type: String,
			required: true,
		},
		cholesterol: {
			type: String,
			required: true,
		},
		sodium: {
			type: String,
			required: true,
		},
		protein: {
			type: String,
			required: true,
		},
	},
	{ timestamps: {}, versionKey: false }
);

const Dish = mongoose.model("Dish", Schema);

export default Dish;
