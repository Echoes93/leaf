'use strict';

const { defaultsDeep } = require("lodash");
const getenv = require("./getenv");


const defaultConfig = {
    server: {
        host: 'localhost',
        port: '8080'
    },
    logger: {
        exposeCoverage: false,
        logging: {
            logRequests: true,
            ignoreRoutes: ['/healthz']
        }
    },
    databases: { },
    services: { }
};

const envConfig = require(`./env/${getenv("NODE_ENV")}.js`);


module.exports = defaultsDeep(defaultConfig, envConfig);
