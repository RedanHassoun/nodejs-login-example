import { LoggerService } from './common/logger-service';
import * as bodyParser from 'body-parser';
import http = require('http');
import { AppConsts } from './app-consts';
import * as express from 'express';

class ServerApp{  
  private readonly app:any = express();
  private server;

  constructor(private port:number,
              private logger:LoggerService){
    this.validatePort(port);
  }

  private validatePort(port:number):void{
    this.logger.debug(`Validating port: ${port}`);
    if(!port || port <= 0){
      throw new Error('Invalid port number');
    }
  }
 
  public init():void{
    this.logger.info('Starting server...');
    this.app.use(bodyParser.json());
    this.app.get('/api/peopleapp', (req,res)=>{
        res.json({"res":"hi"});
    })   
 
    this.server = http.createServer(this.app);

    this.server.listen(this.port,()=>{
      this.logger.info(`Server is up on port: ${this.port}`);
    })
 
  }
}
 
const logger:LoggerService = new LoggerService();
let serverApp:ServerApp = new ServerApp(AppConsts.SERVER_PORT, logger);
serverApp.init();






