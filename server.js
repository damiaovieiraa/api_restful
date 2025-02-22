const app = require("express")();
const router = require("./src/routes/router");

app.use(router);

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));