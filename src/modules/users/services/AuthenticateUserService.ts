// import { inject, injectable } from 'tsyringe'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import CustomErrors from '@shared/errors/CustomError'
import { getRepository } from 'typeorm'
import User from '../infra/models/User'
import authConfig from '../../../config/authData'

interface IRequest { 
  email: string,
  password: string,  
}
interface IResponse { 
  user: User,
  token: string 
}

class AuthenticateUserService {
  public async execute({  email, password}: IRequest): Promise<IResponse> {
  
    const user = await getRepository(User).findOne({ where: { email }})

    if(!user) {
      throw new CustomErrors('Usuário náo é cadastrado!')
    }    

    const passwordVerify = await compare(password, user.password)
    
    if(!passwordVerify) {
      throw new CustomErrors('Verifique seus dados!')
    } 

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    })
    return { user, token }
  
  }
} 


export default AuthenticateUserService