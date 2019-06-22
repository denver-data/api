import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class activeBusinessLicense1561169238657 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: "active_business_license",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "bfn",
                        type: "text",
                    },
                    {
                        name: "license_type",
                        type: "varchar(255)",
                    },
                    {
                        name: "license_status",
                        type: "varchar(255)",
                    },
                    {
                        name: "license_sub_type",
                        type: "varchar(255)",
                    },
                    {
                        name: "expiration_date",
                        type: "timestamp",
                    },
                    {
                        name: "entity_name",
                        isNullable: true,
                        type: "text",
                    },
                    {
                        name: "establishment_address",
                        type: "text",
                    },
                ]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("active_business_license");
    }

}
