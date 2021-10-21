import { Request, Response } from 'express'
import { CreateMessageService } from '../services/CreateMessageService'

class CreateMessageController {
  async handle(resquest: Request, response: Response) {
    const { message } = resquest.body
    const { user_id } = resquest

    const service = new CreateMessageService()

    const result = await service.execute(message, user_id)

    return response.json(result)
  }
}

export { CreateMessageController }
