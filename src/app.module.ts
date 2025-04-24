import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule }  from './prisma/prisma.module';
import { TodosModule } from './to-do-list/to-do-module'

@Module({
  imports: [
    PrismaModule,
    TodosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}