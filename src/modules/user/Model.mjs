import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const Schema = mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
			validate(value) {
				if (!validator.isEmail(value)) {
					throw new Error("Please enter a valid e-mail");
				}
			},
		},

		password: {
			type: String,
			required: true,
			trim: true,
			validate(value) {
				if (value.toLowerCase().includes("password")) {
					throw new Error('Password cannot contain "password"');
				}
			},
		},

		tokens: [
			{
				token: {
					type: String,
					required: true,
				},
			},
		],

		menu: {
			firstDay: {
				title: {
					type: String,
					default: "First Day",
				},
				dish: {
					type: mongoose.Schema.Types.ObjectId,
					default: null,
				},
			},
			secondDay: {
				title: {
					type: String,
					default: "Second Day",
				},
				dish: {
					type: mongoose.Schema.Types.ObjectId,
					default: null,
				},
			},
			thirdDay: {
				title: {
					type: String,
					default: "Third Day",
				},
				dish: {
					type: mongoose.Schema.Types.ObjectId,
					default: null,
				},
			},
			fourthDay: {
				title: {
					type: String,
					default: "Fourth Day",
				},
				dish: {
					type: mongoose.Schema.Types.ObjectId,
					default: null,
				},
			},
			fifthDay: {
				title: {
					type: String,
					default: "Fifth Day",
				},
				dish: {
					type: mongoose.Schema.Types.ObjectId,
					default: null,
				},
			},
			sixthDay: {
				title: {
					type: String,
					default: "Sixth Day",
				},
				dish: {
					type: mongoose.Schema.Types.ObjectId,
					default: null,
				},
			},
			seventhDay: {
				title: {
					type: String,
					default: "Seventh Day",
				},
				dish: {
					type: mongoose.Schema.Types.ObjectId,
					default: null,
				},
			},
		},
	},
	{ timestamps: {}, versionKey: false }
);

Schema.methods.toJSON = function () {
	const user = this;
	const userObject = user.toObject();

	//Filter out sensitive data from response
	delete userObject.password;
	delete userObject.tokens;

	return userObject;
};

Schema.methods.generateAuthToken = async function () {
	const user = this;
	const token = jwt.sign({ _id: user._id.toString() }, "secrethere");

	user.tokens = user.tokens.concat({ token });
	await user.save();

	return token;
};

Schema.statics.findByCredentials = async (email, password) => {
	const user = await User.findOne({ email });

	if (!user) {
		throw new Error("Incorrect e-mail or password");
	}

	const isMatch = await bcrypt.compare(password, user.password);

	if (!isMatch) {
		throw new Error("Incorrect e-mail or password");
	}

	return user;
};

// Hash the plain text password before saving
Schema.pre("save", async function (next) {
	const user = this;

	if (user.isModified("password")) {
		user.password = await bcrypt.hash(user.password, 8);
	}

	next();
});

const User = mongoose.model("User", Schema);

export default User;
