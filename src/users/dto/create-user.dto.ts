import {ApiProperty} from '@nestjs/swagger';
import {IsEmail, IsString, Length} from 'class-validator';

export class CreateUserDto {
    @ApiProperty({example: 'user@email.com', description: "Unique user's mail"})
    @IsString({message: 'Should be a string'})
    @IsEmail({}, {message: 'Incorrect email'})
    readonly email: string;

    @ApiProperty({example: '12345678', description: "User's password"})
    @IsString({message: 'Should be a string'})
    @Length(4, 16, {message: 'Should be more than 4 and less than 16 digits'})
    readonly password: string;
}
