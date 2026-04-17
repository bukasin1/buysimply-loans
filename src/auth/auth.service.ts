import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    private staffs = JSON.parse(
        fs.readFileSync(path.join(__dirname, '../../data/staffs.json'), 'utf-8'),
    );

    constructor(private jwtService: JwtService) { }

    async validateUser(email: string, password: string) {
        const user = this.staffs.find((u) => u.email === email);

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        // If passwords are plain in JSON, compare directly (assuming sign up happens that hashes password with bcrypt)
        const isMatch =
            user.password.startsWith('$2b$')
                ? await bcrypt.compare(password, user.password)
                : password === user.password;

        if (!isMatch) {
            throw new UnauthorizedException('Invalid credentials');
        }

        return user;
    }

    async login(email: string, password: string) {
        const user = await this.validateUser(email, password);

        const payload = {
            email: user.email,
            role: user.role,
        };

        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}