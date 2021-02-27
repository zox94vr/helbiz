const main = async () => {
  const express = require("express");
  const mainRoute = require("./routes/main");

  const app = express();
  app.use(express.json());
  app.use(mainRoute);

  app.listen(3000);
};
main();
