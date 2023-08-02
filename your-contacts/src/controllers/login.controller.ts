import { Response, Request } from "express";

export const LoginController = async (req: Request, res: Response) => {
    const user = await LoginService(req.body)

    return res.status(201).json(user)
}