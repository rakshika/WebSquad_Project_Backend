import ordersModel from './orders-model.js';
export const findOrders = () => ordersModel.find();
export const findOrdersByDonorId = (did) => ordersModel.find({donorUserName: did});
export const findOrdersByCustomerId = (cid) => ordersModel.find({customerUserName: cid});
export const createOrder = (order) => ordersModel.create(order);
