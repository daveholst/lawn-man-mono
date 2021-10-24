import * as express from 'express';
import { fertiliserGetRoutes } from './get-fertiliser';


const router = express.Router();

router.use('/', fertiliserGetRoutes)

export { router as fertiliserRoutes }