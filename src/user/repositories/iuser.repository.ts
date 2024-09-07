import { User } from "../entities/user.entity";

export abstract class IUserRepository{
    abstract create(user: User)

    abstract findByEmail(email: string)
}