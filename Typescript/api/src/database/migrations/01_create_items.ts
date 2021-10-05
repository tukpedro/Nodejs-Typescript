import { Knex } from 'knex'; // immportar com primeira letra maiuscula, importa o tipo apenas


export async function up(knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('image').notNullable();
    });
}


export async function down(knex: Knex) {
    return knex.schema.dropTable('items')
}
