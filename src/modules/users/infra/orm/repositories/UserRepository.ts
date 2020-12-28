import { EntityRepository, Repository } from 'typeorm'
import User from '../../models/User'
// import ICreateUserDTO from '../../../dtos/ICreateUserDTO'
// import ICompanyRepository from '../../../repositories/ICompanyRepository'
@EntityRepository(User)
class UserRepository extends Repository<User> {

      // public async create({fantasia, razao, cnpj, address, email, type, active, fone, is_excluded}: ICreateCompanyDTO){

      //   const company = this.companyRepository.create({ fantasia, razao, cnpj, address, email, type, active, fone, is_excluded })

      //   await this.companyRepository.save(company)

      //   return company
      // }
      
      public async findByEmail(email: string ): Promise<User | undefined>{
        const user = await this.findOne({
          where : { email }
        })
        
        return user
      }
      
      // public findById(id: string){
      //   const company = this.companies.find(company => company.id === id)
      //   return company
      // }
      
      // public show(id:string){
      //   const company = this.companies.find(company => company.id === id)
      //   return company
      // }
      
      public async listAll(){
        const users = await this.find()
        
        return users
      }

      // public change(id:string, code: number, fantasia: string, razao: string, cnpj: string, address: ICompanyAddress, email: string, type: number, active: boolean, fone: string){
      //   const indexCompany = this.companies.findIndex(company => company.id === id)
      //   const newCompany = {
      //     id,
      //     code,
      //     fantasia,
      //     razao,
      //     cnpj,
      //     address,
      //     email,
      //     type,
      //     active,
      //     fone
      //   }

      //   this.companies.splice(indexCompany,1, newCompany)
      
      //   return newCompany
      // }

      // public remove(id:string){
      //   const indexCompany = this.companies.findIndex(company => company.id === id)

      //   this.companies.splice(indexCompany,1)
        
      // }
  }

export default UserRepository