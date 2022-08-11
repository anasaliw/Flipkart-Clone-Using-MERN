import express from 'express';
import { connection } from './db/connection.js';
import dotenv from 'dotenv';
import defaultPut from './defaultPut.js';
const app=express();
import Route from './Routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

//Setting up Database
const PORT= 8000;
dotenv.config();
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
connection(username,password);
app.listen(PORT);
defaultPut();

//Some Default Settings

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

//Adding Routes
app.use('/',Route);

