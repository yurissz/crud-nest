import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsuarioEntity } from "src/core/entities/usuario.entity";
import { Repository } from "typeorm";
import { ListUserDTO } from "./dtos/ListUser.dto";


@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>
    ) { }

    async listaUsuarios() {
        const usuariosSalvos = await this.usuarioRepository.find()
        const usuariosLista = usuariosSalvos.map(user => new ListUserDTO(user.id, user.name))
        return usuariosLista
    }
}