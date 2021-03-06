import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Paciente from '../models/Paciente';

export default {

  async create(request: Request, response: Response) {
    const {
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
    } = request.body;
  
    const pacientesRepository = getRepository(Paciente);
  
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
  
    return response.status(201).json({ message: "Paciente cadastrado com sucesso!" });
  }

};