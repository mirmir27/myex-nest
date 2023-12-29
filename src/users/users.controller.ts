import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @Post()
    createUser(@Body() body: CreateUserDTO) {
        return this.userService.create(body.name, body.email, body.password);
    }

    @Get()
    findAll(){
        return this.userService.find();
    }

    @Get('/specific')
    findSpesific(@Query('email') email: string) {
        return this.userService.findSpesific(email);
    }

    @Get('/:id')
    findUser(@Param('id') id : string) {
        return this.userService.findOneBy(parseInt(id));
    }

}
