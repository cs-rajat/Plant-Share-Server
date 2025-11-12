import Food from "../models/foodModel.js";

export const getAllFoods = async (req, res) => {
  const foods = await Food.find({ food_status: "Available" });
  res.json(foods);
};

export const getFeaturedFoods = async (req, res) => {
  const foods = await Food.find({ food_status: "Available" })
    .sort({ quantity: -1 })
    .limit(6);
  res.json(foods);
};

export const getFoodById = async (req, res) => {
  const food = await Food.findById(req.params.id);
  if (!food) return res.status(404).json({ message: "Food not found" });
  res.json(food);
};

export const addFood = async (req, res) => {
  try {
    const newFood = new Food(req.body);
    await newFood.save();
    res.status(201).json(newFood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateFood = async (req, res) => {
  const updated = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteFood = async (req, res) => {
  await Food.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
