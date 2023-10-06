// Import mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Tạo schema cho Seat
const seatSchema = new Schema({
  id: { type: String },
  StatusSeat: { type: Boolean },
});

// Tạo model từ schema
const Seat = mongoose.model('Seat', seatSchema);

// Export model
module.exports = Seat;
