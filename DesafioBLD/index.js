const express = require("express");
const app = express();
const db = require("./database/db.js");
const Drivers = require("./models/Drivers");
const Vehicles = require("./models/Vehicles");
const jsonCreate = require("./controller/DriverController");

// Teste de conexão com BD
db.authenticate()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((errorMessage) => {
    console.error(errorMessage);
  });

// Receber parametros do body do JSON
app.use(express.json());

// Rota para exibir os motoristas do BD
app.get("/drivers", (req, res) => {
  Drivers.findAll({
    include: [{ model: Vehicles }],
  }).then(async (driver) => {
    let driversArray = [];
    let driverFormat = {};
    await jsonCreate(driver, driversArray, driverFormat);
    res.json(driversArray);
  });
});

// Rota de cadastro de novo motorista com validação de CEP
app.post("/drivers", async (req, res) => {
  const { id, name, postalCode } = req.body;
  let part1 = postalCode.slice(0, 5);
  let part2 = postalCode.slice(6, 9);
  let check1 = isNaN(part1);
  let check2 = isNaN(part2);
  if (check1 || check2 || postalCode.length != 9 || postalCode[5] != "-") {
    res.status(400).send("CEP inválido");
  } else {
    const driver = await Drivers.create({
      id,
      name,
      postalCode,
    }).then(() => {
      res.sendStatus(200);
    });
  }
});

//Rota de cadastro de carros
app.post("/vehicle", async (req, res) => {
  let { id, plate, driverId } = req.body;
  id = parseInt(id);
  driverId = parseInt(driverId);
  const vehicle = await Vehicles.create({
    id,
    plate,
    driverId,
  }).then(() => {
    res.sendStatus(200);
  });
});

app.listen(8000, () => {
  console.info("API running on port 8000");
});
