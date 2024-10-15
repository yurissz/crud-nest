import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'users' })
export class UsuarioEntity {

    @PrimaryColumn('uuid')
    id: string

    @Column({ name: 'name', length: 100, nullable: false })
    name: string;

    @Column({ name: 'email', length: 100, nullable: false })
    email: string;

    @Column({ name: 'password', length: 255, nullable: false })
    password: string

    @CreateDateColumn({ name: 'create_at' })
    createAt: string

    @UpdateDateColumn({ name: 'update_at' })
    updateAt: string;

    @DeleteDateColumn({ name: 'delete_at' })
    deleteAt: string
}