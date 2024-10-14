import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDTO {

    @IsString()
    @IsNotEmpty({ message: 'O nome é necessário!' })
    name: string;

    @IsEmail()
    @IsNotEmpty({ message: 'O email é necessário' })
    email: string;


    @IsNotEmpty({ message: 'A senha é necessária' })
    password: string;
}