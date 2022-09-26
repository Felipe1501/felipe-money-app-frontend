const express = require('express');
const auth = require('./auth');

module.exports = function (server) {
    //definir URL base para todas as rotas
    /*const router = express.Router();
    server.use('/api', router);

    //rotas de ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService');
    BillingCycle.register(router, '/billingCycles');*/


    //rotas protegidas pelo Token JWT
    const protectedApi = express.Router();
    server.use('/api', protectedApi);

    protectedApi.use(auth);

    //rotas de ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService');
    BillingCycle.register(protectedApi, '/billingCycles');

    //rotas
    const openApi = express.Router();
    server.use('/oapi', openApi);

    const AuthService = require('../api/user/AuthService');
    openApi.post('/login', AuthService.login);
    openApi.post('/signup', AuthService.signup);
    openApi.post('/validateToken', AuthService.validateToken);

}