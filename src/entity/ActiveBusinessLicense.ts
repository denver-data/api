import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("active_business_license")
export class ActiveBusinessLicense {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "text"
    })
    bfn: string;

    @Column({
        type: "varchar",
        name: "license_type",
    })
    licenseType: string;

    @Column({
        type: "varchar",
        name: "license_status",
    })
    licenseStatus: string;

    @Column({
        type: "varchar",
        name: "license_sub_type",
    })
    licenseSubType: string;

    @Column({
        type: "date",
        name: "expiration_date",
    })
    expirationDate: Date;

    @Column({
        type: "text",
        nullable: true,
        name: "entity_name",
    })
    entityName: string;

    @Column({
        type: "text",
        name: "establishment_address"
    })
    establishmentAddress: string;

}
