import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"

const router = Router()

// localhost:3000/movies

// GET localhost:3000/movies/new
router.get('/new', flightsCtrl.new)

// POST /flights
router.post('/', flightsCtrl.create)

export {
  router
}
