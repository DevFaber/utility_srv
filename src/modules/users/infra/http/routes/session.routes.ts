import { Router } from 'express'
import User from '../../models/User'
import AuthenticateUserService from '../../../services/AuthenticateUserService'
const sessionRouter = Router()

sessionRouter.post('/', async (request, response) => {

  const { email, password } = request.body
  
  const authUser = new AuthenticateUserService()

  const { user, token } = await authUser.execute({
   email, password })

  return response.json({ user, token })
})

// sessionRouter.get('/', async (request, response) => {
//   const users = await getRepository(User).find()

//   return response.json(users)

// })

// sessionRouter.get('/:id', async (request, response) => {
//   const { id } = request.params
//   const user = await getRepository(User).findOne(id)

//   return response.json(user)
// })



export default sessionRouter