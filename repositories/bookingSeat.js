import { BookingSeat } from "../models/index.js"

const insertBookingSeat = async ({
    _id,
    customerId,
    totalSeats,
    totalPrice,
    routes,
    info,
    bookingSeatDetails,
  }) => {
    try {
      const bookingSeat = await BookingSeat.create({
        _id,
        customerId,
        totalSeats,
        totalPrice,
        routes,
        info,
        bookingSeatDetails,
      });
      return bookingSeat;
    } catch (exception) {
      if (!!exception.errors) {
        // Xử lý lỗi từ kiểm tra dữ liệu đầu vào (validation)
        throw new Error('Input error', exception.errors);
      }
    }
  };

  export default {
    insertBookingSeat,
  }