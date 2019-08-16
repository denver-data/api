import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class UpdateLog1557097140302 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'update_log',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'entity',
          type: 'text'
        },
        {
          name: 'created',
          type: 'timestamp'
        }
      ]
    }), true)
  }

  public async down (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('update_log')
  }
}
