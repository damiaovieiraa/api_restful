const router = require("express").Router();
const filmesController = require("../controllers/filmesController");

router.get("/", (request, response) => {
    return response.status(200).send("Olá, bem-vindo à minha API!");
});

router.get("/filmes", filmesController.getAll);
router.get("/filmes/:id", filmesController.getFilme);
router.post("/filmes", filmesController.addFilme);
router.delete("/filmes/:id", filmesController.deleteFilme);
router.put("/filmes/:id", filmesController.uptadeFilme);

module.exports = router;