'use strict';

/**
 * description-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::description-service.description-service');
