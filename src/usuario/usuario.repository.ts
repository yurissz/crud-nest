import { Injectable } from "@nestjs/common"
import { UsuarioEntity } from "src/core/entities/usuario.entity"

@Injectable()
export class UsuarioRepository {
    private usuarios: UsuarioEntity[] = []

    listarUsuario() {
        return this.usuarios
    }

    postUsuario(newUser: UsuarioEntity) {
        this.usuarios.push(newUser)
        return newUser
    }

    findUserById(id: string) {
        return this.usuarios.filter(user => user.id === id)
    }
}