import "reflect-metadata"
import { DataSource } from "typeorm"
import { Recipe } from "./recipe/entities/recipe.entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "shaariq",
    password: "qwerty420",
    database: "dev_db",
    synchronize: true,
    logging: true,
    entities: [Recipe],
    migrations: ['./src/migration/*.ts'],
    subscribers: [],
})

