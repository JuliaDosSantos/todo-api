import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userid: number;
    
    @Column()
    title: string;

    @Column()
    data: string;

    @Column()
    hora: string;

    @Column()
    descricao: string;

    @Column()
    finalizada: boolean;

    @Column()
    tipo: number;
}
