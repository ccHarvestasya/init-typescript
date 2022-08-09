import config from 'config';
import log4js from 'log4js';

log4js.configure({
  appenders: {
    out: { type: 'stdout' },
    err: { type: 'stderr' },
    app: {
      type: 'file',
      filename: config.get('log-dir') + '/node-certifier.log',
      maxLogSize: 5000000,
      backups: 10,
      compress: true,
    },
  },
  categories: {
    default: { appenders: ['out', 'app'], level: 'debug' },
    error: { appenders: ['err'], level: 'error' },
  },
});

const logger = log4js.getLogger();
logger.level = 'debug';
logger.debug('Some debug messages');
logger.debug(config.get('Customer.dbConfig'));
logger.info('info test');
logger.error('error test');