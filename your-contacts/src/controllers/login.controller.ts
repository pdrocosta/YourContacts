import { Response, Request } from "express";
import { LoginService } from "../services/login.services";

export const LoginController = async (req: Request, res: Response) => {
    const token = await LoginService(req.body)
    return res.status(200).json({ token })
}