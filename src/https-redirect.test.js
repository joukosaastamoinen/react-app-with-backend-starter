import test from 'tape'
import sinon from 'sinon'
import HttpsRedirect from './https-redirect'

test('when request is made through http', async assert => {
  assert.plan(3)
  const httpsRedirect = HttpsRedirect()
  const context = {
    redirect: sinon.stub(),
    protocol: 'http',
    host: 'foo.com',
    url: '/bar'
  }
  const next = sinon.stub()

  await httpsRedirect(context, next)

  assert.ok(
    context.redirect.calledWith(`https://${context.host}${context.url}`),
    'should redirect to https'
  )
  assert.equal(
    context.status,
    301,
    'should set status to 301 moved permanently'
  )
  assert.ok(next.notCalled, 'should not call next middleware')
})

test('when request is made through https', async assert => {
  assert.plan(3)
  const httpsRedirect = HttpsRedirect()
  const context = {
    redirect: sinon.stub(),
    protocol: 'https',
    host: 'foo.com',
    url: '/bar'
  }
  const next = sinon.stub()

  await httpsRedirect(context, next)

  assert.ok(context.redirect.notCalled, 'should redirect to https')
  assert.notOk(context.status, 'should not change status code')
  assert.ok(next.called, 'should call next middleware')
})
