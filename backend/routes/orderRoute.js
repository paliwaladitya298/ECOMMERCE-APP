import express from 'express';
import {placeOrder , placeOrderStripe , placeOrderRazorpay , allOrders , UserOrders , updateStatus, verifyStripe} from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

//Admin Feautures
orderRouter.post('/list',adminAuth,allOrders);
orderRouter.post('/status',adminAuth , updateStatus);

//Payment Feautures

orderRouter.post('/place', authUser , placeOrder);
orderRouter.post('/stripe', authUser , placeOrderStripe);
// orderRouter.post('/razorpay', authUser , placeOrderRazorpay);

//User Feautires
orderRouter.post('/userorders', authUser , UserOrders);

// verify payment
orderRouter.post('/verifyStripe' , authUser , verifyStripe)

export default orderRouter;