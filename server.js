const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

requireDir('./model');

const usuario = mongoose.model('Usuario');

//iniciando o app
const app = express();
app.use(express.json());
//iniciando o bd

mongoose.connect('mongodb://localhost:27017/projetointegra', { useNewUrlParser: true});
app.use("/api", require("./routes"));

app.listen(3005);