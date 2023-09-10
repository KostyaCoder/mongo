const dealersRouter = require("express").Router();
const dealersController = require("../controllers/dealers.controller ");

dealersRouter
  .route("/")
  .post(dealersController.createDealer);
  // .get(dealersController.getCarDealers);

// dealersRouter
//   .route("/:dealersId")
//   .get(dealersController.getDealer)
//   .put(dealersController.updateDealer)
//   .delete(dealersController.deleteDealer);

module.exports = dealersRouter;
