"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Paciente_1 = __importDefault(require("../models/Paciente"));
exports.default = {
    async index(request, response) {
        return response.json({
            msg: 'v1 API - Mais Saúde'
        });
    },
    async create(request, response) {
        const { cpf_paciente, nome, telefone, data_nascimento, sexo, email, senha, logradouro, bairro, numero, complemento, cep, cidade, uf } = request.body;
        const pacientesRepository = typeorm_1.getRepository(Paciente_1.default);
        const paciente = pacientesRepository.create({
            cpf_paciente,
            nome,
            telefone,
            data_nascimento,
            sexo,
            email,
            senha,
            logradouro,
            bairro,
            numero,
            complemento,
            cep,
            cidade,
            uf
        });
        await pacientesRepository.save(paciente);
        return response.status(201).json({ message: "Ok!" });
    }
};
