import { Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller.js';

@Module({
    controllers: [RoomsController],
})
export  class RoomsModule {}
