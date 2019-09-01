import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class parcel1567299794189 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: "parcel",
                columns: [
                    {
                        name: "PIN",
                        type: "text",
                        isPrimary: true,
                    },
                    {
                        name: "SCHEDNUM",
                        type: "text",
                    },
                    {
                        name: "MAPNUM",
                        type: "text",
                    },
                    {
                        name: "BLKNUM",
                        type: "text",
                    },
                    {
                        name: "PARCELNUM",
                        type: "text",
                    },
                    {
                        name: "APPENDAGE",
                        type: "text",
                    },
                    {
                        name: "PARCEL_SOURCE",
                        type: "text",
                    },
                    {
                        name: "SYSTEM_START_DATE",
                        type: "timestamp",
                    },
                    {
                        name: "OWNER_NAME",
                        type: "text",
                    },
                    {
                        name: "OWNER_ADDRESS_LINE1",
                        type: "text",
                    },
                    {
                        name: "OWNER_ADDRESS_LINE2",
                        type: "text",
                    },
                    {
                        name: "OWNER_ADDR_NBR_PREFIX",
                        type: "text",
                    },
                    {
                        name: "OWNER_ADDR_NBR",
                        type: "text",
                    },
                    {
                        name: "OWNER_ADDR_NBR_SUFFIX",
                        type: "text",
                    },
                    {
                        name: "OWNER_STR_NAME_PRE_MOD",
                        type: "text",
                    },
                    {
                        name: "OWNER_STR_NAME_PRE_DIR",
                        type: "text",
                    },
                    {
                        name: "OWNER_STR_NAME_PRE_TYPE",
                        type: "text",
                    },
                    {
                        name: "OWNER_STR_NAME",
                        type: "text",
                    },
                    {
                        name: "OWNER_STR_NAME_POST_TYPE",
                        type: "text",
                    },
                    {
                        name: "OWNER_STR_NAME_POST_DIR",
                        type: "text",
                    },
                    {
                        name: "OWNER_STR_NAME_POST_MOD",
                        type: "text",
                    },
                    {
                        name: "OWNER_UNIT_TYPE",
                        type: "text",
                    },
                    {
                        name: "OWNER_UNIT_IDENT",
                        type: "text",
                    },
                    {
                        name: "OWNER_CITY",
                        type: "text",
                    },
                    {
                        name: "OWNER_STATE",
                        type: "text",
                    },
                    {
                        name: "OWNER_ZIP",
                        type: "text",
                    },
                    {
                        name: "SITUS_ADDRESS_ID",
                        type: "text",
                    },
                    {
                        name: "SITUS_ADDRESS_LINE1",
                        type: "text",
                    },
                    {
                        name: "SITUS_ADDRESS_LINE2",
                        type: "text",
                    },
                    {
                        name: "SITUS_CITY",
                        type: "text",
                    },
                    {
                        name: "SITUS_STATE",
                        type: "text",
                    },
                    {
                        name: "SITUS_ZIP",
                        type: "text",
                    },
                    {
                        name: "SITUS_ADDR_NBR",
                        type: "text",
                    },
                    {
                        name: "SITUS_ADDR_NBR_SUFFIX",
                        type: "text",
                    },
                    {
                        name: "SITUS_STR_NAME_PRE_MOD",
                        type: "text",
                    },
                    {
                        name: "SITUS_STR_NAME_PRE_DIR",
                        type: "text",
                    },
                    {
                        name: "SITUS_STR_NAME_PRE_TYPE",
                        type: "text",
                    },
                    {
                        name: "SITUS_STR_NAME",
                        type: "text",
                    },
                    {
                        name: "SITUS_STR_NAME_POST_TYPE",
                        type: "text",
                    },
                    {
                        name: "SITUS_STR_NAME_POST_DIR",
                        type: "text",
                    },
                    {
                        name: "SITUS_STR_NAME_POST_MOD",
                        type: "text",
                    },
                    {
                        name: "SITUS_UNIT_TYPE",
                        type: "text",
                    },
                    {
                        name: "SITUS_UNIT_IDENT",
                        type: "text",
                    },
                    {
                        name: "TAX_DIST",
                        type: "text",
                    },
                    {
                        name: "LAND_VALUE",
                        type: "text",
                    },
                    {
                        name: "IMPROVEMENT_VALUE",
                        type: "text",
                    },
                    {
                        name: "IMPROVEMENTS",
                        type: "text",
                    },
                    {
                        name: "PROP_CLASS",
                        type: "text",
                    },
                    {
                        name: "TOTAL_VALUE",
                        type: "text",
                    },
                    {
                        name: "LAND",
                        type: "text",
                    },
                    {
                        name: "D_CLASS",
                        type: "text",
                    },
                    {
                        name: "D_CLASS_CN",
                        type: "text",
                    },
                    {
                        name: "DCL12",
                        type: "text",
                    },
                    {
                        name: "ACT_ZONE",
                        type: "text",
                    },
                    {
                        name: "IMP_AREA",
                        type: "text",
                    },
                    {
                        name: "CCYRBLT",
                        type: "text",
                    },
                    {
                        name: "ASAL_INSTR",
                        type: "text",
                    },
                    {
                        name: "SALE_MONTHDAY",
                        type: "text",
                    },
                    {
                        name: "SALE_YEAR",
                        type: "text",
                    },
                    {
                        name: "SALE_PRICE",
                        type: "text",
                    },
                    {
                        name: "RECEPTION_NUM",
                        type: "text",
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
