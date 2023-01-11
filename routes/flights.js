import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"

const router = Router()

// localhost:3000/movies

// GET localhost:3000/movies
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

// GET localhost:3000/movies/new
router.get('/new', flightsCtrl.new)

export {
  router
}
