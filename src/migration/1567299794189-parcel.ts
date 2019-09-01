import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class parcel1567299794189 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: "parcel",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "PIN",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "SCHEDNUM",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "MAPNUM",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "BLKNUM",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "PARCELNUM",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "APPENDAGE",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "PARCEL_SOURCE",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "SYSTEM_START_DATE",
                        type: "timestamp",
                        isNullable: true,
                    },
                    {
                        name: "OWNER_NAME",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "OWNER_ADDRESS_LINE1",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "OWNER_ADDRESS_LINE2",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "OWNER_ADDR_NBR_PREFIX",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "OWNER_ADDR_NBR",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "OWNER_ADDR_NBR_SUFFIX",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "OWNER_STR_NAME_PRE_MOD",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "OWNER_STR_NAME_PRE_DIR",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "OWNER_STR_NAME_PRE_TYPE",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "OWNER_STR_NAME",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "OWNER_STR_NAME_POST_TYPE",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "OWNER_STR_NAME_POST_DIR",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "OWNER_STR_NAME_POST_MOD",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "OWNER_UNIT_TYPE",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "OWNER_UNIT_IDENT",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "OWNER_CITY",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "OWNER_STATE",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "OWNER_ZIP",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "SITUS_ADDRESS_ID",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "SITUS_ADDRESS_LINE1",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "SITUS_ADDRESS_LINE2",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "SITUS_CITY",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "SITUS_STATE",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "SITUS_ZIP",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "SITUS_ADDR_NBR",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "SITUS_ADDR_NBR_SUFFIX",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "SITUS_STR_NAME_PRE_MOD",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "SITUS_STR_NAME_PRE_DIR",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "SITUS_STR_NAME_PRE_TYPE",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "SITUS_STR_NAME",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "SITUS_STR_NAME_POST_TYPE",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "SITUS_STR_NAME_POST_DIR",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "SITUS_STR_NAME_POST_MOD",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "SITUS_UNIT_TYPE",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "SITUS_UNIT_IDENT",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "TAX_DIST",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "LAND_VALUE",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "IMPROVEMENT_VALUE",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "IMPROVEMENTS",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "PROP_CLASS",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "TOTAL_VALUE",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "LAND",
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
                        name: "DCL12",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "ACT_ZONE",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "IMP_AREA",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "CCYRBLT",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "ASAL_INSTR",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "SALE_MONTHDAY",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "SALE_YEAR",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "SALE_PRICE",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "RECEPTION_NUM",
                        type: "text",
                        isNullable: true,
                    },
                ]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("parcel");
    }

}
