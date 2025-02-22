const router = require("express").Router();
const filmes = require("../data/filmes.json");

router.get("/", (request, response) => {
    response.status(200).send("Olá, bem-vindo à minha API!");
});

router.get("/filmes", (request, response) => {
    response.status(200).json(filmes);
});

module.exports = router;