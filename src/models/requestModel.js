import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  foodId: String,
  requester: {
    name: String,
    email: String,
    photoURL: String,
  },
  location: String,
  reason: String,
  contactNo: String,
  status: { type: String, default: "pending" },
}, { timestamps: true });

export default mongoose.model("Request", requestSchema);
