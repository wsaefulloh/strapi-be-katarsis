'use strict';

/**
 * process-workflow controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::process-workflow.process-workflow');
