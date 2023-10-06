import { BookingSeat } from "../models/index.js"
import Exception from "../exceptions/Exception.js"

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

  const getBookingSeatByCustomerId = async (customerId) => {
    const bookingSeats = await BookingSeat.find({ customerId: customerId });
    if(!bookingSeats) {
      throw new Exception('Cannot find booking seat with id ' + customerId)
    }
    return bookingSeats

  //   let filteredRoutes = await BookingSeat.aggregate([
  //     {
  //       $match: {
  //         "cutomerId": cutomerId
  //       }
  //     }
  //   ])
  //   return filteredRoutes;
  }

  export default {
    insertBookingSeat,
    getBookingSeatByCustomerId,
  }