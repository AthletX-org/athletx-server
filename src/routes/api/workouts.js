const express = require("express");
const router = express.Router({ mergeParams: true });
const workoutsController = require("../../controllers/workoutsController");
const authenticate = require("../../middleware/authJwt");
router.get("/", workoutsController.getAllWorkouts);
router.get("/:workoutId", workoutsController.getWorkout);
router.post("/", workoutsController.createWorkout);
router.delete("/:workoutId", workoutsController.deleteWorkout)

module.exports = router;
