import { Router } from 'express'

import companyRouter from '../../../../modules/companies/infra/http/routes/company.routes'
import userRouter from '../../../../modules/users/infra/http/routes/user.routes'
import sessionRouter from '../../../../modules/users/infra/http/routes/session.routes'
// import customersRouter from '../../../../modules/customers/infra/http/routes/customers.routes'
// import ordersRouter from '../../../../modules/orders/infra/http/routes/orders.routes'
// import troublesRouter from '../../../../modules/troubles/infra/http/routes/troubles.routes'
// import solutionsRouter from '../../../../modules/solutions/infra/http/routes/solutions.routes'

 const routes = Router()

 routes.use('/companies', companyRouter)
 routes.use('/users', userRouter)
 routes.use('/sessions', sessionRouter)
//  routes.use('/customers', customersRouter)
//  routes.use('/orders', ordersRouter)
//  routes.use('/troubles', troublesRouter)
//  routes.use('/solutions', solutionsRouter)

 export default routes