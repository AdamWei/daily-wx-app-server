const winston = require( 'winston' );
const { format } = winston;
const { combine, label, json } = format;
// define the custom settings for each transport (file, console)
const options = {
  file: {
    level: 'info',
    filename: `./logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false, // do not exit on handled exceptions
});

winston.loggers.add('access', {
  format: combine(
    label({ label: 'access' }),
    json()
  ),
  transports: [
    new winston.transports.Console({ level: 'info', colorize: true }),
    new winston.transports.File({ filename: './logs/access.log' })
  ]
});
logger['access'] = winston.loggers.get('access')['info'];

module.exports = logger;
