
import combineRouter from 'koa-combine-routers'
import publicRouter from './publicRouter'

export default combineRouter(publicRouter)