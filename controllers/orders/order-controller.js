import * as ordersDao from '../orders/orders-dao.js';

const findOrders = async (req, res) => {
    const orders = await ordersDao.findOrders()
    res.json(orders);
}
const findOrderByDonorId = async (req, res) => {
    const donorId = req.params.did;
    const order = await ordersDao.findOrdersByDonorId(donorId);
    res.json(order);
}
const findOrderByCustomerId = async (req, res) => {
    const customerId = req.params.cid;
    const order = await ordersDao.findOrdersByCustomerId(customerId);
    res.json(order);
}
const createOrder = async (req, res) => {
    const newOrder = req.body;
    const insertedOrder = await ordersDao.createOrder(newOrder);
    res.json(insertedOrder);
}

const OrderController = (app) => {
    app.get('/api/orders', findOrders);
    app.get('/api/ordersDonor/:did', findOrderByDonorId);
    app.get('/api/ordersCustomer/:cid', findOrderByCustomerId);
    app.post('/api/orders', createOrder);
}

export default OrderController;