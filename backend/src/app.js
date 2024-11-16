import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import userRoute from "./routes/user.route.js"
let app = express();
// setup  Middleware
app.use(express.json());
app.use(cors({
    origin:"*",
    credentials: true
}))
app.use(cookieParser())
app.use(urlencoded({
    extended:true,
}))
app.use(express.static(path.join("C:\Users\Administrator\Desktop\wattasapp\backend>", 'public')));
// Routes
app.use("/api/user",userRoute)
export default app;