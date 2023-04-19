import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { HealthController } from './health.controller';

@Module({
  imports: [ ThrottlerModule.forRoot({
    ttl: 60,
    limit: 10,
  }),],
  controllers: [HealthController],
})
export class HttpModule {}
