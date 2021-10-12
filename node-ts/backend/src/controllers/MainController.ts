import { NextFunction, Request, Response } from "express";
import { uuid } from "uuidv4";
import arr from "../database/db";

export default {

  async logRoutes(req: Request, res: Response, next: NextFunction) {
    console.log(`[${req.method.toUpperCase()}] -> ${req.url}`);
    return next();
  },

  async getProjects(req: Request, res: Response) {
    const { name } = req.query;
    // const result = name
    //   ? arr.filter(project => project.name.includes(name))
    //   : arr;
    if (!name) {
      return res.json(arr);
    } else {
      const arrName = arr.find((project) => project.name === name);
      if (arrName === undefined) {
        return res.status(400).json({ error: "Not Found" });
      } else {
        return res.json(arrName);
      }
    }
  },

  async newProject(req: Request, res: Response) {
    const { name, owner } = req.body;
    if (!name || !owner) {
      return res.status(400).json({ msg: "Some field is blank. Try again." });
    }
    const id = uuid();
    const project = {
      id,
      name,
      owner,
    };
    arr.push(project);
    return res.json(arr);
  },

  async updateProject(req: Request, res: Response) {
    const { id, newName } = req.body;
    if (!id || !newName) {
      return res.status(400).json({ msg: "Some field is blank. Try again." });
    }
    const index = arr.findIndex((project) => project.id === id);
    if (index < 0) {
      return res.status(400).json({ error: "Not Found" });
    }
    arr[index].name = newName;
    return res.json(arr);
  },

  async updateOwner(req: Request, res: Response) {
    const { id, newOwner } = req.body;
    if (!id || !newOwner) {
      return res.status(400).json({ msg: "Some field is blank. Try again." });
    }
    const index = arr.findIndex((project) => project.id === id);
    if (index < 0) {
      return res.status(400).json({ error: "Not Found" });
    }
    arr[index].owner = newOwner;
    return res.json(arr);
  },

  async delProject(req: Request, res: Response) {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ msg: "Some field is blank. Try again." });
    }
    const index = arr.findIndex((project) => project.id === id);
    if (index < 0) {
      return res.status(400).json({ error: "Not Found" });
    }
    arr.splice(index, 1);
    return res.json(arr);
  },
};
