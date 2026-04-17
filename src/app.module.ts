import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { LoansModule } from './loans/loans.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { ThrottleMiddleware } from './common/middleware/throttle.middleware';

@Module({
  imports: [AuthModule, LoansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, ThrottleMiddleware).forRoutes('*');
  }
}
