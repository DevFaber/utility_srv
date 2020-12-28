import { Router } from 'express'
import { getRepository } from 'typeorm'
import CreateCompanyService from '../../../services/CreateCompanyService'
import Company from '../../models/Company'

import authMiddleware from '../../../../../middlewares/auth'

const companiesRouter = Router()
companiesRouter.use(authMiddleware)

companiesRouter.post('/', async (request, response) => {
  const { razao, fantasia, cnpj, address, neighborhood, city, uf, cep, email, type, fone, active, is_excluded } = request.body
  const createCompany = new CreateCompanyService()

  // const createCompany = container.resolve(CreateCompanyService)
  const company = await createCompany.execute({
    razao, fantasia, cnpj, address, neighborhood, city, uf, cep, email, type, fone, active, is_excluded
  })

  return response.json(company)
})

companiesRouter.get('/', async (request, response) => {
  const companies = await getRepository(Company).find()

  return response.json(companies)

})

companiesRouter.get('/:id', async (request, response) => {
  const { id } = request.params
  const company = await getRepository(Company).findOne(id)

  return response.json(company)
})

// companiesRouter.put('/:id', async (request, response) => {
//   const { id } = request.params
//   const { code, fantasia, razao, cnpj, address, email, type, active, fone } = request.body

//   const hasCompany = companyRepository.findById(id)

//   if(!hasCompany){
//     throw new CustomError('Empresa não existe!')
//   }

//   const company = companyRepository.change(id, code, fantasia, razao, cnpj, address, email, type, active, fone)

//   return response.json(company)
// })

// companiesRouter.delete('/:id', async (request, response) => {
//   const { id } = request.params

//   companyRepository.remove(id)

//   return response.json(`Empresa ${id} removida!`)
// })


export default companiesRouter