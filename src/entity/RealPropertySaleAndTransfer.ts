import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";

@Entity("real-property-sales-and-transfers")
@ObjectType()
export class RealPropertySaleAndTransfer {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;


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
    RECEPTION_NUM: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    INSTRUMENT: string;

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
    SALE_MONTHDAY: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    RECEPTION_DATE: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    SALE_PRICE: string;

    @Field()
    @Column({
        nullable: true,
        type: "timestamp",
    })
    GRANTOR: Date;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    GRANTEE: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    CLASS: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    MKT_CLUS: string;

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
    NBHD_1: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    NBHD_1_CN: string;

    @Field()
    @Column({
        nullable: true,
        type: "text",
    })
    PIN: string;
}
