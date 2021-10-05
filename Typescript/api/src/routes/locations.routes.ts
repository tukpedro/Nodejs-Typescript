import { Router } from "express";
import knex from "../database/connection";

const locationsRouter = Router();

locationsRouter.post("/", async (req, res) => {
  const {
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    items
  } = req.body;

  const location = {
    image: "fake-img.png",
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf
  };

  const transaction = await knex.transaction();

  const newIds = await transaction("locations").insert(location);

  const location_id = newIds[0];

  const locationItems = await items.map((item_id : number) => {
    return {
      item_id,
      location_id,
    }
  });

  console.log(locationItems)

  await transaction('location_items').insert(locationItems);

  return res.json({
    id: location_id,
    ...location
  });
});

export default locationsRouter;
