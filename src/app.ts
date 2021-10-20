import 'dotenv/config'
import express from 'express'

import { router } from './routes'

const app = express()
app.use(express.json())
app.use(router)

app.get('/github', (resquest, response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  )
})

app.get('/signin/callback', (resquest, response) => {
  const { code } = resquest.query

  return response.json(code)
})

app.listen(process.env.PORT, () =>
  console.log(`Server is runnig on PORT ${process.env.PORT} 🎉`)
)
