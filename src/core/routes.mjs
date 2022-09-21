import userRouter from "../modules/user/Routes.mjs";
import dishRouter from "../modules/dish/Routes.mjs";

export default function routes(app) {
	app.use("/user", userRouter);
	app.use("/dish", dishRouter);
}
