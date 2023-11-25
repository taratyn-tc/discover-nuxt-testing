import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  switch (event.method) {
    case 'GET':
      return `
        <html>
<body>
<form method="post">
  <input type="text" name="foo" value="aaa">
  <input type="text" name="bar" value="bbb">
  <input type="submit" value="Submit">
</form>
</body>`
    case 'POST': {
      const body = await readBody(event)
      console.log(body)
      return body
    }
  }
})