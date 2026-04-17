import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';

const ipMap = new Map();

@Injectable()
export class ThrottleMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void) {
        const ip = req.ip;
        const now = Date.now();

        const lastRequest = ipMap.get(ip) || 0;

        if (now - lastRequest < 500) {
            throw new HttpException('Too many requests', 429);
        }

        ipMap.set(ip, now);
        next();
    }
}