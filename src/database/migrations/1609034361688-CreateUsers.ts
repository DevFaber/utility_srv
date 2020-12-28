import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateUsers1609034361688 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'users',
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()',
                },                
                {
                  name: 'comp_id',
                  type: 'uuid',                  
                },
                {
                  name: 'name',
                  type: 'varchar',
                },
                {
                  name: 'email',
                  type: 'varchar',
                  isUnique: true,
                },
                {
                  name: 'password',
                  type: 'varchar',              
                },      
                {
                  name: 'phone',
                  type: 'varchar',              
                },      
                {
                  name: 'type',
                  type: 'int',              
                },
                {
                  name: 'profile',
                  type: 'varchar',              
                },                
                {
                  name: 'is_active',
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
              ],
              foreignKeys: [
                  {
                   name: 'ForeignCompany',
                   columnNames: ['comp_id'],
                   referencedTableName: 'companies',
                   referencedColumnNames: ['id'],
                   onDelete: 'SET NULL',
                   onUpdate: 'CASCADE',
                  },
                ]
            })
          )   
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
