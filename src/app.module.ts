import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { LoansModule } from './loans/loans.module';

@Module({
  imports: [AuthModule, LoansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
