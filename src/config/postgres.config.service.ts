import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { UsuarioEntity } from "src/core/entities/usuario.entity";

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService) {
    }

    createTypeOrmOptions(): TypeOrmModuleOptions {

        return {
            type: 'postgres',
            // host: this.configService.get<string>('HOST'),
            // port: this.configService.get<number>('PORT'),
            // username: this.configService.get<string>('USERNAME'),
            // password: this.configService.get<string>('PASSWORD'),
            // database: this.configService.get<string>('DATABASE'),
            host: 'localhost',
            database: 'crudnest',
            password: 'postgres',
            username: 'postgres',
            port: 5432,
            entities: [UsuarioEntity],
            synchronize: true
        }
    }
}