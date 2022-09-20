import userRouter from "../modules/user/Routes.mjs";

export default function routes(app) {
	app.use("/user", userRouter);
}
