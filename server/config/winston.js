import winston from 'winston'

const customFormat = winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`
})

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        customFormat
    ),
    transports: [
        new winston.transports.File({ filename: "logs/error.log", level: 'error' }),
        new winston.transports.File({ filename: "logs/combined.log" })
    ]
})

logger.add(new winston.transports.Console({
    format: winston.format.simple(),
}));


export default logger