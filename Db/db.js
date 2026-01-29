import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
const db=mysql.createPool({
    host:process.env.SQL_HOST
})
