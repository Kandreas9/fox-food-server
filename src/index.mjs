import express from "express";
import cors from "cors";

import mongoConnection from "./core/mongoConnection.mjs";
import routes from "./core/routes.mjs";
import server from "./core/server.mjs";
import parseRes from "./core/parseRes.mjs";

const app = express();

app.disable("x-powered-by"); //Disable Express Signature

app.use(cors());
mongoConnection();
parseRes(app);
routes(app);

server(app);
