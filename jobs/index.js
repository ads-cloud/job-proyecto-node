const cron = require('node-cron');
const pokemonesController = require('../controllers/pokemones.controller');

cron.schedule('* */4 * * *', () => {
    pokemonesController.getPkemonApi()
})