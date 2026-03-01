import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    First: String,
    Last: String,
    City: String
}, {
    timestamps: true
})

export default mongoose.models.students || mongoose.model("students", studentSchema)
