export default ({ clientJSUrl }) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
      <script src="${clientJSUrl}"></script>
    </body>
  </html>
`
