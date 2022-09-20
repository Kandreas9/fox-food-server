import mongoose from "mongoose";

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

export default function mongoConnection() {
	mongoose
		.connect(process.env.MONGO_URI, options)
		.catch((err) => console.log(err));

	// When the connection is disconnected
	mongoose.connection.on("disconnected", () => {
		console.log("Mongoose disconnected");
	});
}
