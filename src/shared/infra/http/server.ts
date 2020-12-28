import 'reflect-metadata'
import 'dotenv/config'

import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import { errors } from 'celebrate'
import cors from 'cors'
import '../../../database'
// import '../../../shared/container'

import routes from '@shared/infra/http/routes'
import CustomError from '@shared/errors/CustomError'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof CustomError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      })
    }
    console.log(err)

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    })
  },
)

app.listen(3333, () => {
  console.log('👍BACKEND ORDERS START.....')
})
