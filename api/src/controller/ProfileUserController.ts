import { Request, Response } from 'express'
import { ProfileUserService } from '../services/ProfileUserService'

class ProfileUserController {
  async handle(resquest: Request, response: Response) {
    const { user_id } = resquest

    const service = new ProfileUserService()
    const result = await service.execute(user_id)

    return response.json(result)
  }
}

export { ProfileUserController }
