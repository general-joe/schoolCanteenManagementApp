/// Adding a winston logger to log our errors
const winston = require('winston')





const logger = winston.createLogger({
    levels: winston.config.syslog.levels,
    transports: [
      new winston.transports.Console({ level: 'error' }),
      new winston.transports.File({
        filename: 'log/error.log',
        level: 'info'
      })
    ]
  });


module.exports = logger;