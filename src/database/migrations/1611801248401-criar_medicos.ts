import { query } from "express";
import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class criarMedicos1611801248401 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'medicos',
            columns: [
                {
                    name: 'crm',
                    type: 'varchar',
                    isPrimary: true,
                },
                {
                    name: 'nome',
                    type: 'varchar',
                },
                {
                    name: 'cpf_medico',
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
                    name: 'email',
                    type: 'varchar',
                },
                {
                    name: 'senha',
                    type: 'varchar',
                },
                {
                    name: 'especialidade',
                    type: 'varchar',
                },
                {
                    name: 'horario_entrada',
                    type: 'varchar',
                },
                {
                    name: 'horario_saida',
                    type: 'varchar',
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('medicos');
    }

}
