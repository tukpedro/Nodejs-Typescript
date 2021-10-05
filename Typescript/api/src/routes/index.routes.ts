import { Router } from "express";
import itemsRouter from "./items.routes";
import locationsRoutes from "./locations.routes";
import log from "./log.routes";

const routes = Router();

routes.use(log.logRoutes)

routes.use("/items", itemsRouter);
routes.use("/locations", locationsRoutes);

export default routes;
