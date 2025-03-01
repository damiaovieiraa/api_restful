const filmes = require("../data/filmes.json");

const getAll = (request, response) => {
    return response.status(200).json(filmes);
};

const getFilme = (request, response) => {
    const { id } = request.params;
    for (const filme of filmes) {
        if (filme.id == id) {
            return response.status(200).json(filme);
        };
    };
    return response.status(200).json({message: "id not found"});
};

const addFilme = (request, response) => {
    const filme = request.body;
    filmes.push(filme);
    return response.status(201).json({id: filme.id});
};

const deleteFilme = (request, response) => {
    const { id } = request.params;
    for (const filme of filmes) {
        if (filme.id == id) {
            const index = filmes.indexOf(filme);
            filmes.splice(index, 1);
            return response.status(200).json({message: "deleted"});
        };
    };
    return response.status(200).json({message: "id not found"});
};

const uptadeFilme = (request, response) => {
    const { id } = request.params;
    const { title, description } = request.body;
    for (const filme of filmes) {
        if (filme.id == id) {
            filme.title = title;
            filme.description = description;
            return response.status(200).json({message: "updated"});
        };
    };
    return response.status(200).json({message: "id not found"});
};

module.exports = {
    getAll,
    getFilme,
    addFilme,
    deleteFilme,
    uptadeFilme
};