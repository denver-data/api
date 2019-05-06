import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("campaign_contribution")
export class CampaignContribution {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "date",
    })
    date: Date;

    @Column({
        type: "varchar",
        name: "campaign_name",
    })
    campaignName: string;

    @Column({
        type: "varchar",
    })
    organization: string;

    @Column({
        type: "money",
    })
    amount: number;

    @Column({
        type: "varchar",
        name: "contributor_last_name",
    })
    contributorLastName: string;

    @Column({
        type: "varchar",
        name: "contributor_middle_name"
    })
    contributorMiddleName: string;

    @Column({
        type: "varchar",
        name: "contributor_first_name",
    })
    contributorFirstName: string;

    @Column({
        type: "varchar",
    })
    employer: string;

    @Column({
        type: "varchar",
    })
    occupation: string;

    @Column({
        type: "varchar",
    })
    address: string;

    @Column({
        name: "city_id",
        type: "int",
    })
    cityId: number;

    @Column({
        name: "state_id",
        type: "int",
    })
    stateId: number;

    @Column({
        name: "zip_id",
        type: "int",
    })
    zipId: number;

    @Column({
        type: "varchar",
        name: "campaign_type"
    })
    campaignType: string;

    @Column({
        type: "varchar",
    })
    race: string;

    @Column({
        type: "varchar",
        name: "district_number"
    })
    districtNumber: string;
}
