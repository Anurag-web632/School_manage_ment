import express from "express"
import { addSalaryController,viewSalaryController } 
from "../controllers/salaryController.js";
const router =  express.Router()
//API
//POST
// https://school-manage-ment.onrender.com/api/v2/employees/salary/add
router.post("/add",addSalaryController);

// https://school-manage-ment.onrender.com/api/v2/employees/salary/view
router.get("/view",viewSalaryController);



export default router