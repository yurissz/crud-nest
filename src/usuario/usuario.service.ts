import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsuarioEntity } from "src/usuario/usuario.entity";
import { Repository } from "typeorm";
import { ListUserDTO } from "./dtos/ListUser.dto";
import { UpdateUserDTO } from "./dtos/AtualizaUser.dto";


@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>
    ) { }

    async criaUsuario(usuarioEntity: UsuarioEntity) {
        return await this.usuarioRepository.save(usuarioEntity)
    }

    async listaUsuarios() {
        const usuariosSalvos = await this.usuarioRepository.find()
        const usuariosLista = usuariosSalvos.map(user => new ListUserDTO(user.id, user.name))
        return usuariosLista
    }

    async updateUsuario(id: string, usuarioUpdate: UpdateUserDTO) {
        return this.usuarioRepository.update(id, usuarioUpdate)
    }

    async deleteUsuario(id: string) {
        const usuarioRemovido = this.usuarioRepository.delete(id)
        return usuarioRemovido
    }
}