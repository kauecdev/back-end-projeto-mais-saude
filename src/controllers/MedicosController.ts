import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Medico from '../models/Medico';

export default {
  
  async create(request: Request, response: Response) {
    const {
      crm,
      nome,
      cpf_medico,
      telefone,
      data_nascimento,
      email,
      senha,
      especialidade,
      horario_entrada,
      horario_saida,
    } = request.body;

    const medicosRepository = getRepository(Medico);

    const medico = medicosRepository.create({
      crm,
      nome,
      cpf_medico,
      telefone,
      data_nascimento,
      email,
      senha,
      especialidade,
      horario_entrada,
      horario_saida,
    });

    await medicosRepository.save(medico);

    return response.status(201).json({ message: "Médico cadastrado com sucesso!" })
  }

}