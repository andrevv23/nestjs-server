import { Controller, Get, Post, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { TodosService } from './to-do-service';
import { CreateToDo } from '../dto/create-to-do';

@Controller('todos')
export class TodosController {
    constructor(private readonly svc: TodosService) {}

    @Get()
    findAll() {
        return this.svc.findAll();
    }

    @Post()
    create(@Body() dto: CreateToDo) {
        return this.svc.create(dto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.svc.remove(id);
    }
}