import mongoose from 'mongoose'

const { Schema, model } = mongoose

const userSchema = new Schema(
    {
        expressAddr: { type: String },
        expressNum: { type: Number, enum: [0, 1, 2, 3], default: 0 },
        expressStatus: { type: String },
        expressName: { type: String },
        expressPhoneNum: { type: String },
        prize: { type: String },
        wechart: { type: String, required: true },
        openId: { type: String, required: true },
        accountId: {
            type: Schema.Types.ObjectId,
            ref: 'Accounts',
            required: true,
        },
        winGame1: { type: Number, default: 0 },
    },
    { timestamps: true }
)

export default model('records', userSchema)
