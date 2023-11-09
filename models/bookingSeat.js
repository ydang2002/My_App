import { ObjectId, Schema } from "mongoose"
import mongoose from "mongoose"

// Trip Schema
const tripSchema = new Schema({
    id: { type: String },
    originTime: { type: String },
    destinationTime: { type: String },
    originDate: { type: String },
    destinationDate: { type: String },
});

// Province Schema
const provinceSchema = new Schema({
    id: { type: String },
    nameProvinces: { type: String },
    locations: { type: String },
});

// Carrier Schema
const carrierSchema = new Schema({
    id: { type: String },
    name: { type: String },
});

// Route Schema
const routeSchema = new Schema({
    id: { type: String },
    origin: { type: provinceSchema },
    destination: { type: provinceSchema },
    distance: { type: String },
    duration: { type: String },
    price: { type: Number },
    trips: { type: tripSchema},
    carriers: { type: carrierSchema },
});

//Info Customer
const info = new Schema({
    name: { type: String},
    email: { type: String},
    phone: { type: String},
});

//Info Customer
const test = new Schema({
    name: { type: String},
    email: { type: String},
    phone: { type: String},
});

// Seat Schema
const detailSchema = new Schema({
    seatNumber: { type: String },
});

const bookingSeatSchema = new Schema({
    // _id: { type: String },
    // _id: { type: String },
    id: { type: String },
    customerId: { type: String },
    totalSeats: { type: Number },
    totalPrice: { type: Number },
    routes: [{ type: routeSchema }],
    info: { type: info },
    test: { type: test },
    bookingSeatDetails: [{ type: detailSchema }]
});


const BookingSeat = mongoose.model('BookingSeat', bookingSeatSchema);

export default BookingSeat
