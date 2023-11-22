import {beforeEach, describe, expect, it} from "vitest"
import {fetch, setup, startServer, useTestContext} from "@nuxt/test-utils"

await setup({browser: false, server: true, nuxtConfig: {runtimeConfig: {foo: 'xxx'}}})
describe('/api/endpoint1', async () => {
    it('should return 404', async () => {
        const r = await fetch('/api/endpoint1')
        expect(r.status).toBe(404)
    })
})

describe('/api/endpoint2', async () => {
    it('should return 404', async () => {
        const r = await fetch('/api/endpoint2')
        expect(r.status).toBe(404)
    })
})

describe('/api/runtime-config', async () => {
    const URL = '/api/runtime-config';
    beforeEach(async () => {
        process.env.NUXT_FOO = 'bar'
        await startServer()
    })
    it('should return 200', async () => {
        const r = await fetch(URL)
        expect(await r.text()).toBe('bar')
        expect(r.status).toBe(200)
    })
})
