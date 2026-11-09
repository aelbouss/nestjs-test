import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController
{
    @GET
    getallusers() :STRING[]
    {
        RETURN ["ANASS", "LOCAS", "WINNER"] ;
    }

}
