import { describe, expect, it } from 'vitest'
import { fetch, setup } from '@nuxt/test-utils'

await setup({ server: true, browser: false })
describe('/api/form', () => {
  it('should respond to post', async () => {
    // reproduces https://github.com/unjs/ofetch/issues/37
    const formData = new FormData()
    formData.append('foo', 'aaa')
    formData.append('bar', 'bbb')
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
         'Content-Disposition': 'inline'
      },
      body: formData,
    }
    const res = await fetch('/api/form', options)
    expect(res.status).toBe(200)
    expect(await res.json()).toStrictEqual({ foo: 'aaa', bar: 'bbb'})
  })
})