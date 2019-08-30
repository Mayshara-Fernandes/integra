const mongooese = require('mongoose');

const Usuario = mongooese.model('Usuario');

module.exports = {
    async index(req, res) {
        const user = await Usuario.find();

        return res.json(user)
    },
    async show(req, res) {
        const user = await Usuario.findById(req.params.id);

        return res.json(user)
    },
    async storage(req, res) {
        const user = await Usuario.create(req.body);

        return res.json(user)
    },
    async update(req, res) {
        const user = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(user)
    },
    async destroy(req, res) {
        await   Usuario.findOneAndDelete(req.params.id);

        return res.send();
    }
}