import { ObjectId, Schema } from "mongoose"
import mongoose from "mongoose"

// Seat Schema
const seatSchema = new Schema({
    id: { type: String },
    statusSeat: { type: Boolean },
});

// Trip Schema
const tripSchema = new Schema({
    id: { type: String },
    originTime: { type: String },
    destinationTime: { type: String },
    originDate: { type: String },
    destinationDate: { type: String },
    availableSeats: { type: Number },
    seats: [seatSchema],
});

// Province Schema
const provinceSchema = new Schema({
    id: { type: String },
    nameProvinces: { type: String },
    locations: [{ type: String }],
});

// Carrier Schema
const carrierSchema = new Schema({
    id: { type: String },
    name: { type: String },
    info: [{ type: String }],
});

// Route Schema
const routeSchema = new Schema({
    id: { type: ObjectId },
    origin: [{ type: provinceSchema }],
    destination: [{ type: provinceSchema }],
    distance: { type: String },
    duration: { type: String },
    price: { type: Number },
    trips: [tripSchema],
    carriers: [{ type: carrierSchema }],
});

const Seat = mongoose.model('Seat', seatSchema);
const Trip = mongoose.model('Trip', tripSchema);
const Province = mongoose.model('Province', provinceSchema);
const Carrier = mongoose.model('Carrier', carrierSchema);
const Route = mongoose.model('Route', routeSchema);

// module.exports = { Seat, Trip, Province, Carrier, Route };

export default Route
