import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateToDo } from '../dto/create-to-do';

@Injectable()
export class TodosService {
    constructor(private prisma: PrismaService) {}

    async findAll() {
        return this.prisma.toDo.findMany({ orderBy: { createdAt: 'desc' } });
    }

    async create(dto: CreateToDo) {
        return this.prisma.toDo.create({ data: { title: dto.title } });
    }

    async remove(id: number) {
        const todo = await this.prisma.toDo.delete({ where: { id } });
        if (!todo) throw new NotFoundException('Task not found');
        return todo;
    }
}