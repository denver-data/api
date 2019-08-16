import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm'

export class CampaignContributions1557097153886 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'campaign_contribution',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'date',
            type: 'date'
          },
          {
            name: 'campaign_name',
            type: 'varchar(255)'
          },
          {
            name: 'amount',
            type: 'money'
          },
          {
            name: 'organization',
            type: 'varchar(255)'
          },
          {
            name: 'contributor_last_name',
            type: 'varchar(255)'
          },
          {
            name: 'contributor_middle_name',
            type: 'varchar(255)'
          },
          {
            name: 'contributor_first_name',
            type: 'varchar(255)'
          },
          {
            name: 'employer',
            type: 'varchar(255)'
          },
          {
            name: 'occupation',
            type: 'varchar(255)'
          },
          {
            name: 'address',
            type: 'varchar(512)'
          },
          {
            name: 'city_id',
            type: 'int'
          },
          {
            name: 'state_id',
            type: 'int'
          },
          {
            name: 'zip_id',
            type: 'int'
          },
          {
            name: 'campaign_type',
            type: 'varchar(255)'
          },
          {
            name: 'race',
            type: 'varchar(255)'
          },
          {
            name: 'district_number',
            type: 'varchar(255)'
          }
        ]
      }),
      true
    )
  }

  public async down (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('campaign_contribution')
  }
}
