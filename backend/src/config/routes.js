const express = require('express');

module.exports = function(server) {
    // prefixo
    const router = express.Router();
    server.use('/api', router);

    // Rotas
    const PeopleService = require('../api/people/peopleService');
    const BillingCycleService = require('../api/billingCycle/billingCycleService');
    BillingCycleService.register(router, '/billingCycles');
    PeopleService.register(router, '/people');
}