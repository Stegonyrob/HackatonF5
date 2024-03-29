
import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';


dotenv.config();

const CONFIG = {
    host: process.env.HOST,
    port: 3306,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
};

export const connection = createPool(CONFIG);





