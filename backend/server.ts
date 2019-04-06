import * as express from 'express';
import * as bodyParser from 'body-parser';
import _ = require('lodash');
import http = require('http');
import { AppConsts } from './app-consts';

class ServerApp{  
  private readonly app = express() 
  private server;

  constructor(private port:number){
  }
 
  init(){
    this.app.use(bodyParser.json());
    this.app.get('/api/peopleapp', (req,res)=>{
        res.json({"res":"hi"});
    })   
 
    this.server = http.createServer(this.app)

    this.server.listen(this.port,()=>{
      console.log(`Server is up on port: ${this.port}`)
    })
 
  }
}
 
let serverApp:ServerApp = new ServerApp(AppConsts.SERVER_PORT) 
serverApp.init();






