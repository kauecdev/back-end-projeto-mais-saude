"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarPacientes1611239704103 = void 0;
const typeorm_1 = require("typeorm");
class criarPacientes1611239704103 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
    async down(queryRunner) {
        await queryRunner.dropTable('pacientes');
    }
}
exports.criarPacientes1611239704103 = criarPacientes1611239704103;
