import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dtos/CreateUser.dto";
import { UsuarioRepository } from "./usuario.repository";
import { UsuarioEntity } from "src/usuario/usuario.entity";
import { v4 as uuidv4 } from 'uuid';
import { UsuarioService } from "./usuario.service";
import { ListUserDTO } from "./dtos/ListUser.dto";
import { UpdateUserDTO } from "./dtos/AtualizaUser.dto";


@Controller('/user')
export class UsuarioController {

    constructor(
        private usuarioRepository: UsuarioRepository,
        private usuarioService: UsuarioService
    ) { }

    @Get()
    async findAll() {
        const usuariosSalvos = await this.usuarioService.listaUsuarios()
        return usuariosSalvos;
    }

    @Post()
    createUser(@Body() newUser: CreateUserDTO) {
        const usuarioEntity = new UsuarioEntity()

        usuarioEntity.email = newUser.email
        usuarioEntity.name = newUser.name
        usuarioEntity.password = newUser.password
        usuarioEntity.id = uuidv4()

        this.usuarioService.criaUsuario(usuarioEntity)

        return {
            usuario: new ListUserDTO(usuarioEntity.id, usuarioEntity.name),
            message: 'Usuário criado com sucesso'
        }
    }

    @Get('/:id')
    findOne(@Param() param: { id: string }) {
        console.log(param.id)
        return this.usuarioRepository.findUserById(param.id)
    }

    @Put('/:id')
    async updateUser(
        @Param() param: string,
        @Body() userToUpdate: UpdateUserDTO) {

        const usuarioAtualizado = await this.usuarioService.updateUsuario(param, userToUpdate)

        return {
            usuario: usuarioAtualizado,
            message: "Usuario atualizado com sucesso"
        }
    }

    @Delete('/:id')
    async deleteUser(@Param('id') param: string) {
        const usuarioRemovido = await this.usuarioService.deleteUsuario(param)
        return {
            usuario: usuarioRemovido,
            message: "Usuario removido com sucesso!"
        }
    }

}