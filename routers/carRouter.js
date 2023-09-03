const carRouter = require("express").Router();
const carController = require("../controllers/mans.controller");

carRouter.post("/", carController.createCar);
carRouter.get("/", carController.getCars);
carRouter.get("/:manId", carController.getCar);
carRouter.put("/:manId", carController.updateCar);
carRouter.delete("/:manId", carController.deleteCar);

module.exports = carRouter;
