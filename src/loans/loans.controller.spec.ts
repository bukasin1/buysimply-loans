import { Test, TestingModule } from '@nestjs/testing';
import { LoansController } from './loans.controller';
import { AuthModule } from '../auth/auth.module';
import { LoansModule } from './loans.module';

describe('LoansController', () => {
  let controller: LoansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthModule, LoansModule]
    }).compile();

    controller = module.get<LoansController>(LoansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
