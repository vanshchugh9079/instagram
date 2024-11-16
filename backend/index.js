import dotenv from "dotenv"
import dbConnect from "./src/database/dbConnect.js";
import app from "./src/app.js";
dotenv.config();
dbConnect().then(() => {
    console.log("database connect successfully");
    app.listen(process.env.PORT||4000, () => {
        console.log("Server started on port " + process.env.PORT || 4000);
    })
}).catch((error)=>{
    console.log(error);
})