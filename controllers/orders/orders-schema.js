import mongoose from 'mongoose';
const schema = mongoose.Schema({
    donorUserName: String,
    customerUserName: String,
    status: {
        type: String,
        enum: ['INPROGRESS', 'COMPLETED'],
        default: 'INPROGRESS'
    },
    orderList: Object
}, {collection: 'orders'});
export default schema;