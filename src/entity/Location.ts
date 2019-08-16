import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm'

@Entity('location_cache')
export class Location {
    @PrimaryColumn({
      type: 'text'
    })
    address: string;

    @Column({
      type: 'decimal'
    })
    latitude: number;

    @Column({
      type: 'decimal'
    })
    longitude: number;
}

export const normalizeAddress = (address: string): string => {
  return address.toLowerCase().trim().replace(/\s\s+/g, ' ')
}
