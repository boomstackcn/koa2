import mongoose from 'mongoose'

const { Schema, model } = mongoose

const userSchema = new Schema(
    {
        // __v: { type: Number, select: false },
        name: { type: String, required: true },
        pwd: { type: String, required: true },
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
)

export default model('users', userSchema)
