import { Router } from "express";

import userCreate from "./controllers/userCreate.mjs";
import userDeleteById from "./controllers/userDeleteById.mjs";
import userLogin from "./controllers/userLogin.mjs";
import userLogout from "./controllers/userLogout.mjs";
import userGetById from "./controllers/userGetById.mjs";
import userUpdateById from "./controllers/userUpdateById.mjs";
import auth from "../../middleware/auth.mjs";

const router = Router();

router.post("/", userCreate);
router.post("/login", userLogin);
router.post("/logout", auth, userLogout);
router.get("/:id", auth, userGetById);
router.patch("/:id", auth, userUpdateById);
router.delete("/:id", auth, userDeleteById);

export default router;
