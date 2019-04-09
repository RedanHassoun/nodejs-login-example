const config = require('./config.json')

if(!config){
    throw new Error("Server configuration file not found")
}

module.exports = config;