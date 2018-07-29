import path from 'path'
import Koa from 'koa'
import Router from 'koa-router'
import send from 'koa-send'
import Client from './client'
import Api from './api'
import HttpsRedirect from './https-redirect'

export default config => {
  const clientJSUrl = `/${path.basename(config.clientJSPath)}`
  const app = new Koa()
  app.proxy = config.trustProxy
  if (!config.allowHttp) {
    app.use(HttpsRedirect())
  }
  const staticFileRouter = new Router()
  staticFileRouter.get(clientJSUrl, async ctx => {
    await send(ctx, config.clientJSPath)
  })
  app.use(staticFileRouter.routes())
  app.use(Api())
  app.use(Client(clientJSUrl))
  return app
}
