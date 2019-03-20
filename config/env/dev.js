'use strict';

const devConfig = {
    env: 'development',
    server: {
        host: 'localhost',
        port: '8080'
    },
    logger: {
        exposeCoverage: false,
        logging: {
            level: 'debug'
        }
    },
    databases: { },
    services: { }
};

module.exports = devConfig;
