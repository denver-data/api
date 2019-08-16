import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("update_log")
export class UpdateLog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
      type: "text"
    })
    entity: string;

    @CreateDateColumn()
    created: Date = new Date();
}
