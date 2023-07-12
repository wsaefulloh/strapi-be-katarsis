'use strict';

/**
 * process-workflow service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::process-workflow.process-workflow');
