export default () => async (context, next) => {
  if (context.protocol === 'http') {
    context.status = 301
    context.redirect(`https://${context.host}${context.url}`)
  } else {
    await next()
  }
}
