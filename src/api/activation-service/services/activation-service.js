'use strict';

/**
 * activation-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::activation-service.activation-service');
