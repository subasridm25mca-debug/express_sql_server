 import { createUserController, getAllUserController } from "../Controller/userController";
 
 import express from "express";

 const UserRoute = express.Router();//post put get delete

 UserRoute.post('/signup',createUserController);
 UserRoute.get('/getusers',getAllUserController);

 export default UserRoute
