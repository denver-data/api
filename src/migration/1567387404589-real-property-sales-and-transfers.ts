import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class realPropertySalesAndTransfers1567387404589 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: "real-property-sales-and-transfers",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment"
          },
          {
            name: "SCHEDNUM",
            type: "text",
            isNullable: true,
          },
          {
            name: "RECEPTION_NUM",
            type: "text",
            isNullable: true,
          },
          {
            name: "INSTRUMENT",
            type: "text",
            isNullable: true,
          },
          {
            name: "SALE_YEAR",
            type: "text",
            isNullable: true,
          },
          {
            name: "SALE_MONTHDAY",
            type: "text",
            isNullable: true,
          },
          {
            name: "RECEPTION_DATE",
            type: "text",
            isNullable: true,
          },
          {
            name: "SALE_PRICE",
            type: "text",
            isNullable: true,
          },
          {
            name: "GRANTOR",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "GRANTEE",
            type: "text",
            isNullable: true,
          },
          {
            name: "CLASS",
            type: "text",
            isNullable: true,
          },
          {
            name: "MKT_CLUS",
            type: "text",
            isNullable: true,
          },
          {
            name: "D_CLASS",
            type: "text",
            isNullable: true,
          },
          {
            name: "D_CLASS_CN",
            type: "text",
            isNullable: true,
          },
          {
            name: "NBHD_1",
            type: "text",
            isNullable: true,
          },
          {
            name: "NBHD_1_CN",
            type: "text",
            isNullable: true,
          },
          {
            name: "PIN",
            type: "text",
            isNullable: true,
          },
        ]
      }),
      true
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("real-property-sales-and-transfers");
  }

}
