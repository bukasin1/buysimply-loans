import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class LoansService {
    private loanList = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), 'data/loans.json'), 'utf-8'),
    );

    findAll() {
        return this.loanList;
    }

    findByStatus(status: string) {
        return this.loanList.filter((loan) => loan.status === status);
    }

    findByUserEmail(email: string) {
        return this.loanList.filter((loan) => loan.applicant.email === email);
    }

    findExpired() {
        const now = new Date();

        return this.loanList.filter(
            (loan) => new Date(loan.maturityDate) < now,
        );
    }

    deleteLoan(loanId: string) {
        const index = this.loanList.findIndex((l) => l.id === loanId);

        if (index === -1) {
            return null;
        }

        const deleted = this.loanList[index];
        this.loanList.splice(index, 1);

        return deleted;
    }
}