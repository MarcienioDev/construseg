import dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { Client } from 'pg';

dotenv.config(); //Loading environment variables

// Creates a PostgreSQL client using the .env URL
const client = new Client({
    connectionString: process.env.DATABASE_URL!,
});

const main = async () => {
    try {
        console.log("Migration start");
        await client.connect(); //Connecting to the database
        const db = drizzle(client); //Creating the db object with Drizzle
        await migrate(db, {migrationsFolder: "drizzle"}); //Running migrations
        console.log("Migration finished");
        await client.end(); //Closing the database connection
    } catch (error) {
        console.error("Migration failed", error); //Logging the error
        throw new Error("Migration failed");
    }

}

main();
