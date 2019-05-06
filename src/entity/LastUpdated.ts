import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity("last_updated")
export class LastUpdated {
    @PrimaryColumn({
        type: "date",
    })
    date: Date;

    @Column({
        type: "int",
        name: "campaign_contribution_rows_added"
    })
    campaignContributionRowsAdded: number;
}
