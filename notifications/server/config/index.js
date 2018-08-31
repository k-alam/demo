const bunyan = require('bunyan');

const appname = 'amr';

module.exports = {
  applicationName: appname,
  logger: bunyan.createLogger({ name: appname }),
  mongodb: {
    dsn: 'mongodb://localhost:37017/amrbord',
  },
};
