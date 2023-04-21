import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  await sequelize.sync({ alter: true });
  app.listen(9812);
  console.log("Server on port 3333");
}

main();
