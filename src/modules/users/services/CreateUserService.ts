// import { inject, injectable } from 'tsyringe'
import { hash } from 'bcryptjs'
import CustomErrors from '@shared/errors/CustomError'
import { getCustomRepository } from 'typeorm'
import User from '../infra/models/User'
import UserRepository from '../../users/infra/orm/repositories/UserRepository'
// import ICompanyRepository from '../repositories/ICompanyRepository'

interface IRequest {
  comp_id: string,
  name: string,
  email: string,
  password: string, 
  phone: string,
  type: number,
  profile: string,
  is_active: boolean,
  is_excluded: boolean
}

class CreateUserService {
  public async execute({ comp_id, name, email, password, phone, type, profile, is_active, is_excluded }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository)
  
    const hasUser = await userRepository.findByEmail(email)

    if(hasUser) {
      throw new CustomErrors('Empresa já cadastrada!')
    }
    
    const hashedPassword = await hash(password, 8)

    const user = userRepository.create({
      comp_id,
      name,
      email,
      password: hashedPassword,
      phone,
      type,
      profile,
      is_active,
      is_excluded
    })
    
    await userRepository.save(user)
    
    return user
  
  }
} 


export default CreateUserService