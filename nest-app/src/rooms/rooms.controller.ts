import {Controller, Get, Post} from '@nestjs/common'
import { RoomsService } from './rooms.service.js'

@Controller('rooms')
export  class   RoomsController
{
    @Get()
    Getrooms()
    {
        const roomservice = new RoomsService();
        return ( roomservice.GetAvailableRooms());
    }
    @Post()
    createRoom() : string 
    {
        return "the requested room created successfully";
    }
}
