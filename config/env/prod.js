'use strict';
const _secrets = require("./prod.secret");

const devConfig = {
    env: 'production',
    server: {
        host: 'localhost',
        port: '80'
    },
    logger: {
        exposeCoverage: false,
        logging: {
            level: 'info'
        }
    },
    databases: { },
    services: { }
};

module.exports = devConfig;
