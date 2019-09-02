import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class ActiveBusinessLicenseNullableExpiration1566103401049 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.changeColumn(
      "active_business_license",
      "expiration_date",
      new TableColumn({
        name: "expiration_date",
        type: "timestamp",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.changeColumn(
      "active_business_license",
      "expiration_date",
      new TableColumn({
        name: "expiration_date",
        type: "timestamp",
        isNullable: false,
      })
    );
  }

}
