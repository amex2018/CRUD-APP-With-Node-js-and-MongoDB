const express = require('express')

const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller')
/**
 * @description Root Route
 * @method GET/
 */
route.get('/', services.HomeRoutes)
/**
 * @description /add-user
 * @method GET/ add-user
 */
route.get('/add-user', services.add_user)
/**
 * @description for Update User
 * @method GET/ update-user
 */
route.get('/update_user', services.update_user)


// Api controllers
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route;