import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"

const router = Router()

// GET /flights
router.get('/', flightsCtrl.index)

// GET localhost:3000/flights/new
router.get('/new', flightsCtrl.new)

// GET localhost:3000/flights/id
router.get('/:id', flightsCtrl.show)

// localhost:3000/flights/:id/edit
router.get("/:id/edit", flightsCtrl.edit)

// POST localhost:3000/flights
router.post('/', flightsCtrl.create)

// POST localhost:3000/flights/:id/tickets
router.post('/:id/tickets', flightsCtrl.createTicket)

// DELETE localhost:3000/flights/:id
router.delete("/:id", flightsCtrl.delete)

// localhost:3000/flights/:id
router.put("/:id", flightsCtrl.update)


export {
  router
}
