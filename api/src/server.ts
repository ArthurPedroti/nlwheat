import { serverHttp } from './app'

serverHttp.listen(process.env.PORT, () =>
  console.log(`Server is runnig on PORT ${process.env.PORT} 🎉`)
)
