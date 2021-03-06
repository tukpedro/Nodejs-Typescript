import express from "express";
import routes from "./routes";
import MainController from "./controllers/MainController"

const app = express();

app.use(express.json());

app.use(MainController.logRoutes);

app.use(routes);

app.listen(3000);
