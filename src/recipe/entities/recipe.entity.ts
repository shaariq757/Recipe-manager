import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Recipe {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({nullable:true})
    description: string

    @Column()
    ingredients: string

    @Column()
    instructions:string

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date
}

