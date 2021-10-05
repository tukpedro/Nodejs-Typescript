// Lógica para criar o JSON com os dados solicitados
const fetch = require("node-fetch");

async function jsonCreate(driver, array, object) {

  // Para cada dado solicitado de cada mostorista, será guardado em um objeto
  for (let i in driver) {
    object.id = driver[i]["id"];
    object.name = driver[i]["name"];
    object.vehicles = [];
    for (let k in driver[i]["vehicles"]) {
      object.vehicles[k] = driver[i]["vehicles"][k]["plate"];
    }
    object.postalCode = driver[i]["postalCode"];

    // Lógica de consumo de API ViaCep
    let url = `https://viacep.com.br/ws/${driver[i]["postalCode"]}/json/`;
    await fetch(url)
      .then((response) => response.json())
      .then((response) => {
        if (response["uf"] !== undefined || response["city"] !== undefined) {
          object.state = response["uf"];
          object.city = response["localidade"];
        } else {
          object.state = "";
          object.city = "";
        }
      });

    // O objeto criado, será salvo em um Array de objetos que será retornado em JSON
    array.push(object);
    object = {};
  }
}

module.exports = jsonCreate;
