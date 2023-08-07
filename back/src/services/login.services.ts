import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { TUser } from "../interfaces/interfaces"
import { compareSync } from "bcryptjs"
import jwt from "jsonwebtoken"
import { User } from "../entities/user.entitie"
import { AppError } from "../error"

export const LoginService = async (data: TUser): Promise<string> => {
    const { email, password } = data
    const UserRepo: Repository<User> = AppDataSource.getRepository(User)
    const user = await UserRepo.findOne({
        where: {
            email
        }
    })

    if (!user) {
        throw new AppError("Invalid credentials", 401);
    }
    const verifyPassword = compareSync(password, user.password)

    if (!verifyPassword) {
        throw new AppError("Wrong password", 401)
    }

    const token: string = jwt.sign(
        {
            id: user.id,
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: "24h",
            subject: String(user.id),
        }
    );
    return token;
}