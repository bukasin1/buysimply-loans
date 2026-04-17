// src/loans/loans.controller.ts

import {
    Controller,
    Get,
    Query,
    Param,
    Delete,
    UseGuards,
    Req,
    ForbiddenException,
} from '@nestjs/common';
import { LoansService } from './loans.service';
import { JwtAuthGuard } from '../common/guards/auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/guards/roles.decorator';

@Controller('loans')
@UseGuards(JwtAuthGuard, RolesGuard)
export class LoansController {
    constructor(private loansService: LoansService) { }

    @Get()
    getLoans(@Query('status') status: string, @Req() req) {
        let loans = status
            ? this.loansService.findByStatus(status)
            : this.loansService.findAll();

        const user = req.user;

        // Hide totalLoan for normal staff
        if (user.role === 'staff') {
            loans = loans.map((loan) => {
                const { totalLoan, ...rest } = loan;
                return rest;
            });
        }

        return loans;
    }

    @Get('expired')
    getExpiredLoans() {
        return this.loansService.findExpired();
    }

    @Get(':userEmail/get')
    getUserLoans(@Param('userEmail') email: string) {
        const loans = this.loansService.findByUserEmail(email);

        return { loans: loans || [] };
    }

    @Delete(':loanId/delete')
    @Roles('superAdmin')
    deleteLoan(@Param('loanId') loanId: string) {
        const deleted = this.loansService.deleteLoan(loanId);

        if (!deleted) {
            throw new ForbiddenException('Loan not found or already deleted');
        }

        return {
            message: 'Loan deleted successfully',
            data: deleted,
        };
    }
}