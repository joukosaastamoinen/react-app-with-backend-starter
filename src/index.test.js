import test from 'tape'
import app from '.'

test('my awesome app', assert => {
  const expected = 'foobar'
  const actual = app()
  assert.equal(actual, expected, 'should return foobar')
  assert.end()
})
