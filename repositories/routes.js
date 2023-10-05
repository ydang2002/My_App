import { Route } from "../models/index.js"
const getAllRoutes = async ({

}) => {
    console.log('get all routes')
}

const insertRoutes = async ({
    id,
    origin,
    destination,
    distance,
    duration,
    price,
    trips,
    carriers,
  }) => {
    // try {
      const route = await Route.create({
        id,
        origin,
        destination,
        distance,
        duration,
        price,
        trips,
        carriers,
      });
      return route;
    // } catch (exception) {
    //   if (!!exception.errors) {
    //     // Xử lý lỗi từ kiểm tra dữ liệu đầu vào (validation)
    //     throw new Error('Input error', exception.errors);
    //   }
    // }
  };

  export default {
    getAllRoutes,
    insertRoutes,
  }