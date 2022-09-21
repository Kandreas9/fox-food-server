import { Router } from "express";
import auth from "../../middleware/auth.mjs";

import dishCreate from "./controllers/dishCreate.mjs";
import dishGetAll from "./controllers/dishGetAll.js";
import dishGetById from "./controllers/dishGetById.mjs";

const router = Router();

router.post("/", dishCreate);
router.get("/:id", auth, dishGetById);
router.get("/", auth, dishGetAll);

export default router;
