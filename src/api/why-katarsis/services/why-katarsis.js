'use strict';

/**
 * why-katarsis service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::why-katarsis.why-katarsis');
