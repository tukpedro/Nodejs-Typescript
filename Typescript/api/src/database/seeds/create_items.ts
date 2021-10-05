import { Knex } from "knex";

export async function seed(knex: Knex) {
    await knex("items").insert([
      { title: "Papel e Papelão", image: "papel.png" },
      { title: "Vidros e Lampadas", image: "vidro.png" },
      { title: "Óleo", image: "oleo.png" },
      { title: "Resíduos Organicos", image: "organico.png" },
      { title: "Baterias e Pilhas", image: "bateria.png" },
      { title: "Eletronicos", image: "eletronico.png" },
    ]);
  }
