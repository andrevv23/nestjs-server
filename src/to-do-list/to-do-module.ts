import { Module } from '@nestjs/common';
import { TodosService } from './to-do-service';
import { TodosController } from './to-do-controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    providers: [TodosService],
    controllers: [TodosController],
})
export class TodosModule {}