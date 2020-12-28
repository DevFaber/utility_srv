import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import CustomError from '../shared/errors/CustomError'
import authConfig from '../config/authData'

interface ITokenPayload {
  iat: number,
  exp: number,
  sub: string
}

export default function authenticate(
  request: Request,
  response: Response,
  next: NextFunction): void {
    const authHeader = request.headers.authorization

    if(!authHeader) {
      throw new CustomError('Token inexistente!')
    }

    const [, token] = authHeader.split(' ')

    try {
      const decoded = verify(token, authConfig.jwt.secret)      

      const { sub } = decoded as ITokenPayload

      request.user = {
        id: sub,
      }

      return next()
      
    } catch (error) {
      throw new CustomError('Token inválido!')
    }
  }