import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class LastUpdated1557097140302 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "last_updated",
            columns: [
                {
                    name: "date",
                    type: "date",
                    isPrimary: true,
                },
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("last_updated");
    }

}
