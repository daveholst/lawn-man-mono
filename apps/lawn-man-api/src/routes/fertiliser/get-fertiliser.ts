import * as express from 'express'

    const router = express.Router();
    router.get('/', (req, res) => {
        res.json({message: 'testing 123'})
    })
export { router as fertiliserGetRoutes}
