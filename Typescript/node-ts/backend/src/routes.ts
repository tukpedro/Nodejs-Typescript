import { Router } from "express";
import MainController from "./controllers/MainController";

const routes = Router();

routes.get("/projects", MainController.getProjects);

routes.post("/projects", MainController.newProject);

routes.put("/projects", MainController.updateProject);

routes.patch("/projects", MainController.updateOwner);

routes.delete("/projects", MainController.delProject);

export default routes;
