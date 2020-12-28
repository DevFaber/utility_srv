import { Router } from 'express'
import { getRepository } from 'typeorm'
import CreateUserService from '../../../services/CreateUserService'
import User from '../../models/User'
import authMiddleware from '../../../../../middlewares/auth'

const usersRouter = Router()

usersRouter.use(authMiddleware)

usersRouter.post('/', async (request, response) => {
  const { comp_id, name, email, password, phone, type, profile, is_active, is_excluded } = request.body
  const createUser = new CreateUserService()

  const user = await createUser.execute({
   comp_id, name, email, password, phone, type, profile, is_active, is_excluded
  })

  return response.json(user)
})

usersRouter.get('/', async (request, response) => {
  console.log(request.user)
  const users = await getRepository(User).find()

  return response.json(users)

})

usersRouter.get('/:id', async (request, response) => {
  const { id } = request.params
  const user = await getRepository(User).findOne(id)

  return response.json(user)
})



export default usersRouter