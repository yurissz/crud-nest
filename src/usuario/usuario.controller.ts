import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dtos/CreateUser.dto";
import { UsuarioRepository } from "./usuario.repository";
import { UsuarioEntity } from "src/core/entities/usuario.entity";
import { v4 as uuidv4 } from 'uuid';


@Controller('/user')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository) { }

    @Get()
    findAll() {
        return this.usuarioRepository.listarUsuario()
    }

    @Post()
    createUser(@Body() newUser: CreateUserDTO) {
        const usuarioEntity = new UsuarioEntity()

        usuarioEntity.email = newUser.email
        usuarioEntity.name = newUser.name
        usuarioEntity.password = newUser.password
        usuarioEntity.id = uuidv4()

        return this.usuarioRepository.postUsuario(usuarioEntity)
    }

    @Get(':id')
    findOne(@Param() param: { id: string }) {
        console.log(param.id)
        return this.usuarioRepository.findUserById(param.id)
    }

    @Put(':id')
    updateUser(@Param() param: string, @Body() userToUpdate) {

    }

    @Delete(':id')
    deleteUser(@Param() param: string) {
    }

}