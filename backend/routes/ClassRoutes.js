import express from "express"
import { addClassController, DeleteClassCotroller, getAllClassController, updateClassCotroller } from "../controllers/ClassController.js"
const router = express.Router()
//ROUTES
// POST API
// https://school-manage-ment.onrender.com/api/v2/class/add
router.post('/add', addClassController)
// https://school-manage-ment.onrender.com/api/v2/class/all
router.get('/all', getAllClassController)
// https://school-manage-ment.onrender.com/api/v2/class/update
router.put('/update/:id', updateClassCotroller)
// https://school-manage-ment.onrender.com/api/v2/class/delete
router.delete('/delete/:id', DeleteClassCotroller)
// // https://school-manage-ment.onrender.com/api/v2/class/get/
// router.get('/get/:_id',isSignIn,getSingleDepartmentCotroller)


export default router;