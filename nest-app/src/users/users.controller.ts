import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController
{
    @Get()
    getallusers() :string[]
    {
        return ["ANASS", "LOCAS", "WINNER"] ;
    }

}
