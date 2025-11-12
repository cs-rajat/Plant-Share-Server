import Request from "../models/requestModel.js";
import Food from "../models/foodModel.js";

export const createRequest = async (req, res) => {
  try {
    const { foodId, location, reason, contactNo } = req.body;
    const newReq = await Request.create({
      foodId,
      requester: {
        name: req.user.name || req.user.email,
        email: req.user.email,
        photoURL: req.user.picture || "",
      },
      location,
      reason,
      contactNo,
    });
    res.status(201).json(newReq);
  } catch (err) {
    res.status(500).json({ message: "Error creating request", error: err.message });
  }
};

export const getRequestsByFood = async (req, res) => {
  const { foodId } = req.params;
  const list = await Request.find({ foodId });
  res.json(list);
};

export const updateRequestStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const updated = await Request.findByIdAndUpdate(id, { status }, { new: true });
  if (status === "accepted") {
    await Food.findByIdAndUpdate(updated.foodId, { food_status: "Donated" });
  }
  res.json(updated);
};
