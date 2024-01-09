import dotenv from "dotenv";
import connectingToDb from "./db/db.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});
const port = process.env.PORT || 8000

app.on("error", (error) => {
  console.log("error ", error);
  throw error;
});
connectingToDb()
 
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running at http://localhost:${port}`);
    });
  })
  .catch((e) => {
    console.log(`connection to db is failed !!!`, e.messsage);
  });
