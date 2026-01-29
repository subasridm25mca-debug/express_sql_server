 import { createUserController, getAllUserController, updateUserPasswordController } from "../Controller/userController";

 import express from "express";

 const UserRoute = express.Router();//post put get delete

 UserRoute.post('/signup',createUserController);
 UserRoute.get('/getusers',getAllUserController);
 UserRoute.put('/updatepass/:id',updateUserPasswordController);
 UserRoute.delete('/deleteuser/:id',deleteUserController);

 export default UserRoute
