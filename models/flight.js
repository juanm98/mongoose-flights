import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class

const Schema = mongoose.Schema

const mealSchema = new Schema({
  name: {
    type: String,
    required: true
  }
}, {
    required: true,
  })

const ticketSchema = new Schema({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/,
  },
  price: {
    type: Number,
    min: 0,
  }
}, {
  timestamps: true,
  })
	
const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"],
  },
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    default: "DEN"
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true
  },
  departs: {
    type: Date, 
    default: function() {
      const today = new Date()
      const aYearLater = today.getDay() + 1
      today.setFullYear(aYearLater)
      return today
    },
    required: true
  },
  tickets: [ticketSchema],
  meals: [{type: Schema.Types.ObjectId, ref: "Meal"}]

}, {
  timestamps: true
})

const Flight = mongoose.model("Flight", flightSchema)

export {
  Flight,
}