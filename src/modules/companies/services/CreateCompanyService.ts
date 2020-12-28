// import { inject, injectable } from 'tsyringe'
import CustomErrors from '@shared/errors/CustomError'
import { getCustomRepository } from 'typeorm'
import Company from '../infra/models/Company'
import CompanyRepository from '../../companies/infra/orm/repositories/CompanyRepository'
// import ICompanyRepository from '../repositories/ICompanyRepository'

interface IRequest {
  razao: string,
  fantasia: string,
  cnpj: string,
  address: string,
  neighborhood: string,
  city: string,
  uf: string,
  cep: string,
  email: string,
  type: number,
  fone: string,
  active: boolean,
  is_excluded: boolean
}

class CreateCompanyService {
  public async execute({ razao, fantasia, cnpj, address, neighborhood, city, uf, cep, email, type, fone, active, is_excluded }: IRequest): Promise<Company> {
    const companyRepository = getCustomRepository(CompanyRepository)
  
    const hasCompany = await companyRepository.findByCnpj(cnpj)

    if(hasCompany) {
      throw new CustomErrors('Empresa já cadastrada!')
    }
    
    const company = companyRepository.create({
      razao, 
      fantasia,
      cnpj,
      address,
      email,
      neighborhood,
      city,
      uf,
      cep,
      type,
      fone,
      active,
      is_excluded
    })

    await companyRepository.save(company)

    return company
  
  }
} 


export default CreateCompanyService