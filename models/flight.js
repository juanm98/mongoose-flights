import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class

const Schema = mongoose.Schema
	
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
      // return new Date().getFullYear() + 1
    },
    required: true
  }
}, {
  timestamps: true
})

const Flight = mongoose.model("Flight", flightSchema)

export {
  Flight
}