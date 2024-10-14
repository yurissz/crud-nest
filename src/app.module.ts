import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmService } from './config/postgres.config.service';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    UsuarioModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmService,
      inject: [TypeOrmService]
    })
  ],
})
export class AppModule { }
