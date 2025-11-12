import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  quantity: String,
  pickupLocation: String,
  expireDate: String,
  notes: String,
  donator: {
    name: String,
    email: String,
    photoURL: String,
  },
  food_status: { type: String, default: "Available" }
}, { timestamps: true });

export default mongoose.model("Food", foodSchema);
