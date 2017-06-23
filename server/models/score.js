const mongoose = require("mongoose");

const ScoreSchema = mongoose.Schema ({
    username: {type: String, required: true},
    score: {type: Number, required: true},
    percentage: {type: Number, required: true}
}, {timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}})

mongoose.model("Score", ScoreSchema)