import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class addressCache1561257731372 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: "location_cache",
        columns: [
          {
            name: "address",
            type: "text",
            isPrimary: true
          },
          {
            name: "latitude",
            type: "decimal"
          },
          {
            name: "longitude",
            type: "decimal"
          }
        ]
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("location_cache");
  }
}
