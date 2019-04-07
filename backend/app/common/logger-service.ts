import * as winston from 'winston';

export class LoggerService{
    private readonly  myFormat = winston.format.printf(({ level, message, timestamp }) => {
        return `${timestamp} ${level}: ${message}`;
      });

    private readonly logger = winston.createLogger({
        level: 'info',
        format: winston.format.combine(
            winston.format.timestamp(),
            this.myFormat
        ),
        defaultMeta: { service: 'user-service' },
        transports: [
          new winston.transports.File({ filename: 'out\\error.log', level: 'error' }),
          new winston.transports.File({ filename: 'out\\server.log' })
        ]
      });
    
    public info(msg:string){
        this.logger.log({
            level: 'info',
            message: msg
          });
    } 

    public debug(msg:string){
        this.logger.log({
            level: 'debug',
            message: msg
          });
    }

    public error(msg:string){
        this.logger.log({
            level: 'error',
            message: msg
          });
    }
}