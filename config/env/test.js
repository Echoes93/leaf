'use strict';

const devConfig = {
    env: 'production',
    server: {
        host: 'localhost',
        port: '8081'
    },
    logger: {
        exposeCoverage: false,
        logging: {
            level: 'warn'
        }
    },
    databases: { },
    services: { }
};

module.exports = devConfig;
