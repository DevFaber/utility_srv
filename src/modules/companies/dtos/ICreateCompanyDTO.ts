export default interface ICreateCompanyDTO {
  razao: string
  fantasia: string
  cnpj: string
  address: string
  neighborhood: string
  city: string
  uf: string
  cep: string
  email: string  
  type: number  
  fone: string
  active: boolean
  is_excluded: boolean  
}