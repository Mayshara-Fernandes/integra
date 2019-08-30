const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
    },
    cpf:{
        type: String,
        required: true,
    },
    telefone:{
        type: String,
        required: true,
    },
    dataCriacao:{
        type: Date,
        default: Date.now,
    },
})

mongoose.model('Usuario', UsuarioSchema);