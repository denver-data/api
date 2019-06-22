import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";

@Entity("active_business_license")
@ObjectType()
export class ActiveBusinessLicense {
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({
        type: "text"
    })
    bfn: string;

    @Field()
    @Column({
        type: "varchar",
        name: "license_type",
    })
    licenseType: string;

    @Field()
    @Column({
        type: "varchar",
        name: "license_status",
    })
    licenseStatus: string;

    @Field()
    @Column({
        type: "varchar",
        name: "license_sub_type",
    })
    licenseSubType: string;

    @Field()
    @Column({
        type: "timestamp",
        name: "expiration_date",
    })
    expirationDate: Date;

    @Field({ nullable: true })
    @Column({
        type: "text",
        nullable: true,
        name: "entity_name",
    })
    entityName?: string;

    @Field()
    @Column({
        type: "text",
        name: "establishment_address"
    })
    establishmentAddress: string;

}
