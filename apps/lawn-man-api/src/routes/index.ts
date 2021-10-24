import * as express from 'express'
import { fertiliserRoutes } from './fertiliser'


const router = express.Router();

router.get('/', (req, res) => {
    res.json('welcome to the api')
})
router.use('/fertiliser', fertiliserRoutes)

export { router as routes}