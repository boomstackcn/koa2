const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        // __v: { type: Number, select: false },
        addr: { type: String },
        expressNum: { type: String },
        expressStatus: { type: String },
        expressName: { type: String},
        expressPhoneNum: { type: String },
        prize: { type: String },
        wechart: { type: String, required: true },
        accountId: { type: Schema.Types.ObjectId, ref: 'Accounts', required: true }
        // avatar_url: { type: String },
        // gender: {
        //     type: String,
        //     enum: ['male', 'female'],
        //     default: 'male',
        //     required: true,
        // },
        // headline: { type: String },
        // locations: {
        //     type: [{ type: Schema.Types.ObjectId, ref: 'Topic' }],
        //     select: false,
        // },
        // business: { type: Schema.Types.ObjectId, ref: 'Topic', select: false },
        // employments: {
        //     type: [
        //         {
        //             company: { type: Schema.Types.ObjectId, ref: 'Topic' },
        //             job: { type: Schema.Types.ObjectId, ref: 'Topic' },
        //         },
        //     ],
        //     select: false,
        // },
        // educations: {
        //     type: [
        //         {
        //             school: { type: Schema.Types.ObjectId, ref: 'Topic' },
        //             major: { type: Schema.Types.ObjectId, ref: 'Topic' },
        //             diploma: { type: Number, enum: [1, 2, 3, 4, 5] },
        //             entrance_year: { type: Number },
        //             graduation_year: { type: Number },
        //         },
        //     ],
        //     select: false,
        // },
        // following: {
        //     type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        //     select: false,
        // },
        // followingTopics: {
        //     type: [{ type: Schema.Types.ObjectId, ref: 'Topic' }],
        //     select: false,
        // },
        // likingAnswers: {
        //     type: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
        //     select: false,
        // },
        // dislikingAnswers: {
        //     type: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
        //     select: false,
        // },
        // collectingAnswers: {
        //     type: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
        //     select: false,
        // },
    },
    { timestamps: true }
);

module.exports = model('users', userSchema);