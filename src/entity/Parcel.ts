import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";

@Entity("parcel")
@ObjectType()
export class Parcel {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    PIN: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    SCHEDNUM: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    MAPNUM: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    BLKNUM: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    PARCELNUM: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    APPENDAGE: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    PARCEL_SOURCE: string;

    @Field()
    @Column({
        nullable: true,
        type: "timestamp",
    })
    SYSTEM_START_DATE: Date;
        
    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    OWNER_NAME: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    OWNER_ADDRESS_LINE1: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    OWNER_ADDRESS_LINE2: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    OWNER_ADDR_NBR_PREFIX: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    OWNER_ADDR_NBR: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    OWNER_ADDR_NBR_SUFFIX: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    OWNER_STR_NAME_PRE_MOD: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    OWNER_STR_NAME_PRE_DIR: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    OWNER_STR_NAME_PRE_TYPE: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    OWNER_STR_NAME: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    OWNER_STR_NAME_POST_TYPE: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    OWNER_STR_NAME_POST_DIR: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    OWNER_STR_NAME_POST_MOD: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    OWNER_UNIT_TYPE: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    OWNER_UNIT_IDENT: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    OWNER_CITY: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    OWNER_STATE: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    OWNER_ZIP: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    SITUS_ADDRESS_ID: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    SITUS_ADDRESS_LINE1: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    SITUS_ADDRESS_LINE2: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    SITUS_CITY: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    SITUS_STATE: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    SITUS_ZIP: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    SITUS_ADDR_NBR: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    SITUS_ADDR_NBR_SUFFIX: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    SITUS_STR_NAME_PRE_MOD: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    SITUS_STR_NAME_PRE_DIR: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    SITUS_STR_NAME_PRE_TYPE: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    SITUS_STR_NAME: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    SITUS_STR_NAME_POST_TYPE: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    SITUS_STR_NAME_POST_DIR: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    SITUS_STR_NAME_POST_MOD: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    SITUS_UNIT_TYPE: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    SITUS_UNIT_IDENT: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    TAX_DIST: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    LAND_VALUE: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    IMPROVEMENT_VALUE: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    IMPROVEMENTS: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    PROP_CLASS: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    TOTAL_VALUE: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    LAND: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    D_CLASS: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    D_CLASS_CN: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    DCL12: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    ACT_ZONE: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    IMP_AREA: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    CCYRBLT: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    ASAL_INSTR: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    SALE_MONTHDAY: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    SALE_YEAR: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    SALE_PRICE: string;
    
    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    RECEPTION_NUM: string;
}
