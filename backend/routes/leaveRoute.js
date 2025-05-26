import express from "express"
import { 
    addLeaveController,
    getEmployeesLeaves,
    getLeavesController,
    leaveDetailController

} from "../controllers/leaveController.js"
import {isSignIn} from "../middlewares/authMiddeware.js"

const router = express.Router()
// Leave routes
// post API
// https://school-manage-ment.onrender.com/api/v2/employees/leave/add
router.post("/add", isSignIn,addLeaveController)
// https://school-manage-ment.onrender.com/api/v2/employees/leave/all-leaves
router.get("/all-leaves/:_id", getLeavesController)
// https://school-manage-ment.onrender.com/api/v2/employees/leave/emp-leaves
router.get("/emp-leaves",getEmployeesLeaves)
// https://school-manage-ment.onrender.com/api/v2/employees/leave/detail/
router.get("/detail/:_id",leaveDetailController);



export default router