const express = require('express')
const router = express.Router()
const { 
  getWorkout,
  getWorkouts, 
  setWorkout, 
  updateWorkout, 
  deleteWorkout, 
} = require('../controllers/workoutController')

// const = require('../middleware/authMiddleware')
router.route('/').get(getWorkouts)
router.route('/').post(setWorkout)
router.route('/:id').put(updateWorkout)
router.route('/:id').delete(deleteWorkout)
router.route('/:id').get(getWorkout)


module.exports = router
