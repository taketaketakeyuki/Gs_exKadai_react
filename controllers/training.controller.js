import { getTraining } from "../services/training.service.js";

export const getResult = async (req, res, next) => {
  try {
    const result = await getTraining(req.body);
    return res.status(200).json({
      status: 200,
      result: result,
      message: "successfully get Training Menu!",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};