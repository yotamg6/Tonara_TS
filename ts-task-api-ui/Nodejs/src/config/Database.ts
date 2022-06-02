import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { Assignments } from '../models/AssignmentModel';

dotenv.config();

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbPassword = process.env.DB_PASS;

export const db = new Sequelize(dbName, dbUser, dbPassword, {
  host: 'localhost',
  dialect: 'postgres',
  logging: true,
  models: [Assignments],
});
