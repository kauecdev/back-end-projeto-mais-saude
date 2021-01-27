import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('pacientes')
export default class Paciente {
  
  @PrimaryColumn()
  cpf_paciente: string;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  data_nascimento: string;

  @Column()
  sexo: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  logradouro: string;

  @Column()
  bairro: string;

  @Column()
  numero: number;

  @Column()
  complemento: string;

  @Column()
  cep: string;

  @Column()
  cidade: string;

  @Column()
  uf: string;

}