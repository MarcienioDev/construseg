import dotenv from 'dotenv';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { faker } from "@faker-js/faker"
import * as schema from './schema';

dotenv.config(); //Loading environment variables

//Creating a PostgreSQL connection pool
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})
const db = drizzle(pool, { schema })

const main = async () => {
    const { todos } = schema; //Get the all table from the schema.
    try{
        console.log("Seeding database...");
        await db.delete(todos);//Before inserting, delete all existing records

        //Creating the fake data
        const todoSeed = new Array(20).fill({}).map((e, i) =>{
            return{
                id: faker.string.uuid(),
                task: faker.lorem.sentence({ min: 3, max: 5}),
                description: faker.lorem.paragraph(),
                dueDate: faker.date.anytime(),
                isDone: faker.datatype.boolean(),
                doneAt: faker.date.anytime(),
                createdAt: faker.date.anytime(),
                updatedAt: faker.date.anytime(),
            };
        });
        await db.insert(todos).values(todoSeed); //Inserting the fake data

        pool.end(); //Closing the database connection

        console.log("Seeding completed.");
    } catch (error){
         console.error(error); //If something goes wrong, log the error and throw an exception.
         throw new Error("Seeding failed"); 
    }
};
main();
