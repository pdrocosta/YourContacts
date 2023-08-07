import { NextFunction, Request, Response } from 'express'
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { AppError } from '../error'

export const tokenValidation = (
    req: Request,
    resp: Response,
    next: NextFunction
) => {
    let token: string | undefined = req.headers.authorization
    if (!token) {
        throw new AppError('Missing bearer token', 401)
    }
    token = token.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {
        if (error) throw new AppError(error.message, 401)
        resp.locals.id = decoded.sub
        return next()
    })
}
    