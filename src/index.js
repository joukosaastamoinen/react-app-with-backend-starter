import 'babel-polyfill'
import bunyan from 'bunyan'
import readConfig from './read-config'
import App from './app'

const config = readConfig()
const logger = bunyan.createLogger({ name: 'server' })
const app = App(config.app)
app.listen(config.port, undefined, undefined, () => {
  logger.info(`Server listening on port ${config.port}`)
})
