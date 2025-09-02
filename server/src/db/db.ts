import { Pool } from 'pg'; 
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';
import dotenv from 'dotenv';

dotenv.config(); //Loading environment variables

//Creating a PostgreSQL connection pool
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

//Creating a Drizzle ORM instance
export const db = drizzle(pool, { schema });