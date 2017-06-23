const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema ({
    question: {type: String, required: true, unique: true},
    answer: {type: String, required: true, unique: true},
    fakeAnswer1: {type: String, required: true, unique: true},
    fakeAnswer2: {type: String, required: true, unique: true}
}, {timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}})

mongoose.model("Question", QuestionSchema)