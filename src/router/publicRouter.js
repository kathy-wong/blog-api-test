import Router from 'koa-router'
import PublicController from '../api/PublicController'

const router = new Router()
router.get('/captcha',PublicController.getCaptcha)
router.post('/login',PublicController.login)
router.post('/sendEmail',PublicController.sendEmail)
export default router