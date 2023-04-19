import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { MessagingModule } from './messaging/messaging.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, MessagingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
