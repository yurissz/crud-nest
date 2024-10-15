import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UpdateUserDTO {

    @IsString()
    @IsNotEmpty({ message: 'O nome é necessário!' })
    name: string;

    @IsEmail()
    @IsNotEmpty({ message: 'O email é necessário' })
    email: string;


    @IsNotEmpty({ message: 'A senha é necessária' })
    password: string;
}