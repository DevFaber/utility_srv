import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateCompany1608998594727 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'companies',
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()',
                },
                {
                  name: 'code',
                  type: 'int',
                  default: "nextval('public.comp_code_seq'::regclass)" ,
                },
                {
                  name: 'razao',
                  type: 'varchar',
                },
                {
                  name: 'fantasia',
                  type: 'varchar',              
                },
                {
                  name: 'cnpj',
                  type: 'varchar',
                },
                {
                  name: 'address',
                  type: 'varchar',              
                },
                {
                  name: 'neighborhood',
                  type: 'varchar',              
                },
                {
                  name: "city",
                  type: "varchar"
                },
                {
                  name: 'uf',
                  type: 'varchar',
                },
                {
                  name: 'cep',
                  type: 'varchar'
                },  
                {
                  name: 'email',
                  type: 'varchar',
                },
                {
                  name: 'type',
                  type: 'int',              
                },
                {
                  name: 'fone',
                  type: 'varchar',
                },
                {
                  name: 'active',
                  type: 'boolean',              
                },
                {
                  name: 'is_excluded',
                  type: 'boolean',
                },
                {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
                },
                {
                  name: 'updated_at',
                  type: 'timestamp',
                  default: 'now()',
                },
              ]
            })
          )
        }
    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('companies')
    }
}
