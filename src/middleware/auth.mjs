import jwt from "jsonwebtoken";
import User from "../modules/user/Model.mjs";

const auth = async (req, res, next) => {
	try {
		const token = req.header("Authorization").replace("Bearer ", "");
		const decoded = jwt.verify(token, "secrethere");
		const user = await User.findOne({
			_id: decoded._id,
			"tokens.token": token,
		});

		if (!user) {
			throw new Error();
		}

		req.token = token;
		req.user = user;
		next();
	} catch (err) {
		res.status(401).send({ success: false, error: "Please authenticate." });
	}
};

export default auth;
