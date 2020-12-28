import { EntityRepository, Repository } from 'typeorm'
import Company from '../../models/Company'
import ICreateCompanyDTO from '../../../dtos/ICreateCompanyDTO'
// import ICompanyRepository from '../../../repositories/ICompanyRepository'
@EntityRepository(Company)
class CompanyRepository extends Repository<Company> {

      // public async create({fantasia, razao, cnpj, address, email, type, active, fone, is_excluded}: ICreateCompanyDTO){

      //   const company = this.companyRepository.create({ fantasia, razao, cnpj, address, email, type, active, fone, is_excluded })

      //   await this.companyRepository.save(company)

      //   return company
      // }
      
      public async findByCnpj(cnpj: string ): Promise<Company | undefined>{
        const company = await this.findOne({
          where : { cnpj }
        })
        
        return company
      }
      
      // public findById(id: string){
      //   const company = this.companies.find(company => company.id === id)
      //   return company
      // }
      
      // public show(id:string){
      //   const company = this.companies.find(company => company.id === id)
      //   return company
      // }
      
      // public listAll(){
      //   const companyList = this.companies
      //   return companyList
      // }

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

export default CompanyRepository