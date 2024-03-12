import mongoose from "mongoose";
import app from "./app.js";

//DATABASE CONNECTION
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("CONNECTED TO DATABASE ✔✔✔"))
  .catch((err) => console.log(`NOT CONNECTED TO DATABASE ❌❌❌`));

//LISTENING APP
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`SERVER STARTED ⚡⚡⚡ PORT ${PORT} `);
});
