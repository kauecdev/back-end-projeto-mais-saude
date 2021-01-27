import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class criarPacientes1611239704103 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'pacientes',
      columns: [
        {
          name: 'cpf_paciente',
          type: 'varchar',
          isPrimary: true,
        },
        {
          name: 'nome',
          type: 'varchar',
        },
        {
          name: 'telefone',
          type: 'varchar',
        },
        {
          name: 'data_nascimento',
          type: 'varchar',
        },
        {
          name: 'sexo',
          type: 'varchar'
        },
        {
          name: 'email',
          type: 'varchar'
        },
        {
          name: 'senha',
          type: 'varchar'
        },
        {
          name: 'logradouro',
          type: 'varchar'
        }, 
        {
          name: 'bairro',
          type: 'varchar'
        },
        {
          name: 'numero',
          type: 'integer'
        },
        {
          name: 'complemento',
          type: 'varchar'
        },
        {
          name: 'cep',
          type: 'varchar'
        },
        {
          name: 'cidade',
          type: 'varchar',
        },
        {
          name: 'uf',
          type: 'varchar'
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pacientes');
  }

}
