'use strict';

/**
 * process-workflow router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::process-workflow.process-workflow');
