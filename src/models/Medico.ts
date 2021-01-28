import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('medicos')
export default class Medico {
  
  @PrimaryColumn()
  crm: string;

  @Column()
  nome: string;

  @Column()
  cpf_medico: string;
  
  @Column()
  telefone: string;

  @Column()
  data_nascimento: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  especialidade: string;

  @Column()
  horario_entrada: string;

  @Column()
  horario_saida: string;

}