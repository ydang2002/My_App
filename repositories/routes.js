import { Route } from "../models/index.js"

const getAllRoutes = async () => {
    let filteredRoutes = await Route.aggregate([
      {
        $match: {
        
        },
      }
    ])

    return filteredRoutes
}

const getRoutesProvince = async (origin, destination, originDate) => { // Thêm hàm này
  let filteredRoutes = await Route.aggregate([
      {
          $match: {
              "origin.nameProvinces": origin, // Lọc theo tên tỉnh xuất phát
              "destination.nameProvinces": destination, // Lọc theo tên tỉnh đến
              "trips.originDate": originDate // Lọc theo thời gian xuất phát
          }
      }
  ])

  return filteredRoutes
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
    getRoutesProvince,
  }