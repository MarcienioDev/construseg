import dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { Client } from 'pg';

dotenv.config();    

const client = new Client({
    connectionString: process.env.DATABASE_URL!,
});

const main = async () => {
    try {
        console.log("Migration start");
        await client.connect();
        const db = drizzle(client);
        await migrate(db, {migrationsFolder: "drizzle"});
        console.log("Migration finished");
        await client.end();
    } catch (error) {
        console.error("Migration failed", error);
        throw new Error("Migration failed");
    }

}

main();
