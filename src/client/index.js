import Template from './template'

export default clientJSUrl => async context => {
  context.body = Template({
    clientJSUrl
  })
}
