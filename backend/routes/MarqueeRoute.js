import expres, { Router } from 'express'
import { GetMarquee, marquee } from '../controllers/MarqueeController.js'
import { isSignIn } from '../middlewares/authMiddeware.js'

const MarqueeRoute = expres.Router()
// https://school-manage-ment.onrender.com/api/marquee/add
MarqueeRoute.post('/add', isSignIn, marquee)
MarqueeRoute.get('/get', GetMarquee)


export default MarqueeRoute