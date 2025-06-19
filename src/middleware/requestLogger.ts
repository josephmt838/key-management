import { NextFunction, Request, Response } from 'express';
import { requestLogger as logger } from '../utils/logger';

export const requestLogger = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const start = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - start;

        logger.info({
            method: req.method,
            url: req.originalUrl,
            status: res.statusCode,
            duration: `${duration}ms`,
            ip: req.ip,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            user: (req as any).user?.id || 'anonymous', // if you have auth middleware
            apiKey: req.headers['x-api-key'] || 'none',
            timestamp: new Date().toISOString(),
        });
    });

    next();
};
