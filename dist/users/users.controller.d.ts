import { UsersService } from './users.service.js';
import { Prisma } from '../generated/prisma/client.js';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(data: Prisma.UserCreateInput): Promise<{
        id: number;
        email: string;
        name: string | null;
    }>;
    findAll(): Promise<{
        id: number;
        email: string;
        name: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        email: string;
        name: string | null;
    } | null>;
    update(id: number, data: Prisma.UserUpdateInput): Promise<{
        id: number;
        email: string;
        name: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        email: string;
        name: string | null;
    }>;
}
