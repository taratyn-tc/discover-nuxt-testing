import {H3Event} from "h3";

export default defineEventHandler(async (event: H3Event): Promise<string> => {
  const config = useRuntimeConfig(event)
  return config.foo ?? 'FAILED'
})