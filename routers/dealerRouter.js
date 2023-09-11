const dealersRouter = require("express").Router();
const dealersController = require("../controllers/dealers.controller ");

dealersRouter
  .route("/")
  .post(dealersController.createDealer)
  .get(dealersController.getAllDealers);

dealersRouter
  .route("/:dealersId")
  .get(dealersController.getDealer)
  .put(dealersController.updateDealer)
  .delete(dealersController.deleteDealer);

module.exports = dealersRouter;
