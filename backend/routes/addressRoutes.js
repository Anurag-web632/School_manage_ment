import express from "express";
import {
  getAddress,
  saveAddress,
  upload,
} from "../controllers/AdressController.js";
import { isSignIn } from "../middlewares/authMiddeware.js";

const Addressrouter = express.Router();

// https://school-manage-ment.onrender.com/api/v2/address
Addressrouter.post("/address", isSignIn, upload.single("image"), saveAddress);

// https://school-manage-ment.onrender.com/api/v2/get
Addressrouter.get("/get", isSignIn, getAddress);

// // https://school-manage-ment.onrender.com/api/v2/employees/salary/view
// router.get("/view", viewSalaryController);

export default Addressrouter;
