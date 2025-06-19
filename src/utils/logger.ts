import path from 'path';
import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

export const requestLogger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
    ),
    transports: [
        new DailyRotateFile({
            filename: 'request-%DATE%.log',
            dirname: path.join(process.cwd(), 'logs/requests'),
            datePattern: 'YYYY-MM-DD',
            zippedArchive: false,
            maxSize: '20m',
            maxFiles: '14d',
            level: 'info',
        }),
    ],
});
