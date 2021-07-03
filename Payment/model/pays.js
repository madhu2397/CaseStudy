const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PaymentSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    orderId: {
        type: String,
        required: true
    },
    paymentOption: {
        type: String,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});

const Payment = mongoose.model('payment', PaymentSchema);

module.exports = Payment;