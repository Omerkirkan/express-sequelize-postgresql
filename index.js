const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000 || process.env.PORT;

app.use(cors());
app.use(express.json());

const db = require("./app/models");
db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


const userRouter = require("./app/routers/user");
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
