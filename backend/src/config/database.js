const mongoose = require("mongoose");
mongoose.Promise = global.Promise; 

module.exports = mongoose.connect('mongodb://localhost/health', { useMongoClient: true });

mongoose.Error.messages.general.required = "O campo '{PATH}' é obrigatório.";
mongoose.Error.messages.Number.min = "O campo '{VALUE}' é menor que o limite mínimo '{MIN}'.";
mongoose.Error.messages.Number.max = "O campo '{VALUE}' é maior que o limite máximo '{MAX}'.";
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o campo '{PATH}'.";