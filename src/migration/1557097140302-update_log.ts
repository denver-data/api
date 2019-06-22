import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class LastUpdated1557097140302 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "update_log",
            columns: [
                {
                    name: "entity",
                    type: "text",
                },
                {
                    name: "created",
                    type: "date",
                },
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("update_log");
    }

}
