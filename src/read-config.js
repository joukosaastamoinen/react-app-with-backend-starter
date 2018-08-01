import fs from 'fs'
import path from 'path'

const getConfigFromEnv = () => {
  if (!process.env.PORT) {
    throw new Error('PORT env variable is not set')
  }
  if (Number.isNaN(process.env.PORT)) {
    throw new Error('PORT env variable is not a number')
  }
  const port = Number(process.env.PORT)
  if (!Number.isInteger(port)) {
    throw new Error('PORT env variable is not an integer')
  }

  const clientBuildDir = path.join('build', 'client')
  const assetManifestPath = path.join(clientBuildDir, 'assets.json')
  const assetManifestJSON = fs.readFileSync(assetManifestPath)
  const assetManifest = JSON.parse(String(assetManifestJSON))
  const clientJSPath = path.join(clientBuildDir, assetManifest.app.js)

  return {
    port,
    app: {
      allowHttp: process.env.ALLOW_HTTP === 'true',
      trustProxy: process.env.TRUST_PROXY === 'true',
      clientJSPath
    }
  }
}

export default getConfigFromEnv
