const carRouter = require("express").Router();
const carController = require("../controllers/cars.controller");
const { findCar } = require("../middlewares/cars.mw");
const reviewRouter = require("./reviewRouter");
const dealerRouter = require("./dealerRouter");

carRouter.post("/", carController.createCar);
carRouter.get("/", carController.getCars);
carRouter.get("/:carId", carController.getCar);
carRouter.put("/:carId", carController.updateCar);
carRouter.delete("/:carId", carController.deleteCar);

carRouter.use("/:carId/reviews", findCar, reviewRouter);
carRouter.use("/:carId/dealers", findCar, dealerRouter);

module.exports = carRouter;
