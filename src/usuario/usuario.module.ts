import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioEntity } from "src/usuario/usuario.entity";
import { UsuarioService } from "./usuario.service";

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioEntity])],
    controllers: [UsuarioController],
    providers: [UsuarioRepository, UsuarioService]
})

export class UsuarioModule { }