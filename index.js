import { connectDB } from "./Db/db.js";
import express from 'express'
import cors from 'dotenv'
import userRoute from "./Route/userRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cores())
connectDB()
app.use('/api/user',userRoute);
//https://localhost:5000/api/user/signup
app.listen(PORT, () => {
    console.log(`your server is running in ${PORT}`);
})