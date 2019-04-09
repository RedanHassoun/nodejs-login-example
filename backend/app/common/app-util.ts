import { LoggerService } from './logger-service';


export class AppUtil{
    private static readonly logger:LoggerService = new LoggerService();
    
    public static validatePort(port:number):void{
        this.logger.debug(`Validating port: ${port}`);
        if(!port || port <= 0){
          throw new Error('Invalid port number');
        }
    }
}