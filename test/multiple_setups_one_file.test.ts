import {beforeEach, describe, expect, it} from "vitest"
import {fetch, setup} from "@nuxt/test-utils"

describe('/api/endpoint1', async () => {
    beforeEach(async () => {
        await setup({browser: false, server: true})
    })
    it('should return 404', async () => {
        const r = await fetch('/api/endpoint1')
        expect(r.status).toBe(404)
    })
})
describe('/api/endpoint2', async () => {
    beforeEach(async () => {
        await setup({browser: false, server: true})
    })
    it('should return 404', async () => {
        const r = await fetch('/api/endpoint2')
        expect(r.status).toBe(404)
    })
})