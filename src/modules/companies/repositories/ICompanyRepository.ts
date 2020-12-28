import Company from '../infra/models/Company'
import ICreateCompanyDTO from '../dtos/ICreateCompanyDTO'

export default interface ICompanyRepository {
  create(data: ICreateCompanyDTO): Promise<Company> 
  // findById(id: string): Company | undefined
  // findByCnpj(cnpj: string): Promise<Company | undefined>
  // show(id: string): Company | undefined
  // listAll(): Company[]
  // change(
  //   id:string, 
  //   code:number, 
  //   fantasia: string,
  //   razao: string,
  //   cnpj: string, 
  //   address: object,
  //   email: string, 
  //   active: boolean, 
  //   type: number,
  //   fone: string
  // ): Company | undefined
  // remove(id:string): void
}