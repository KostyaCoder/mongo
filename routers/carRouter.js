const carRouter = require("express").Router();
const carController = require("../controllers/cars.controller");

carRouter.post("/", carController.createCar);
carRouter.get("/", carController.getCars);
carRouter.get("/:carId", carController.getCar);
carRouter.put("/:carId", carController.updateCar);
carRouter.delete("/:carId", carController.deleteCar);

module.exports = carRouter;
