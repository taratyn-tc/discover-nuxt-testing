import {describe, expect, it} from "vitest/index";
import {fetch, setup} from "@nuxt/test-utils";

describe('/api/endpoint2', async () => {
    await setup({browser: false, server: true})
    it('should return 404', async () => {
        const r = await fetch('/api/endpoint2')
        expect(r.status).toBe(404)
    })
})