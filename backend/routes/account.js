const express = require("express");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db");
const zod = require("zod");
const mongoose = require("mongoose")


const router = express.Router();

router.get("/balance",authMiddleware,async (req,res)=>{
    const userId = req.userId;
    const userAccount = await Account.findOne({userId:userId});
    return res.json({
        amount:userAccount.balance
    })
})


  router.post('/transfer', authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();

    try {
        await session.startTransaction();

        const { amount, to } = req.body;

        const account = await Account.findOne({ userId: req.userId }).session(session);
        if (!account || account.balance < amount) {
            await session.abortTransaction();
            res.status(400).json({
                message: "insufficient balance"
            });
            return; // Added return statement to stop further execution
        }

        const toAccount = await Account.findOne({ userId: to }).session(session);
        if (!toAccount) {
            await session.abortTransaction();
            res.status(400).json({
                message: "invalid account"
            });
            return; // Added return statement to stop further execution
        }

        await Account.findOneAndUpdate({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
        await Account.findOneAndUpdate({ userId: to }, { $inc: { balance: amount } }).session(session);

        await session.commitTransaction();
        res.json({
            message: "transaction successful"
        });
    } catch (error) {
        await session.abortTransaction();
        res.status(500).json({
            message: "transaction failed"
        });
    } finally {
        session.endSession();
    }
});



module.exports = router;