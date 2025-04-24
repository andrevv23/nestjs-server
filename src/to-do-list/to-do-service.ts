import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateToDo } from '../dto/create-to-do';

@Injectable()
export class TodosService {
    constructor(private prisma: PrismaService) {}

    async findAll() {
        return this.prisma.to_do_list.findMany(
        //     { orderBy: 
        //     { createdAt: 'desc' } 
        // }
    );
    }

    // async create(dto: CreateToDo) {
    //     return this.prisma.to_do_list.create(
    //         { data: { title: dto.title } }
    //     );
    // }

    async remove(id: number) {
        const todo = await this.prisma.to_do_list.delete({ where: { id } });
        if (!todo) throw new NotFoundException('Task not found');
        return todo;
    }
}