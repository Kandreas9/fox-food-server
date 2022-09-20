import { Router } from "express";

import userCreate from "./controllers/userCreate.mjs";

const router = Router();

router.post("/", userCreate);

export default router;
