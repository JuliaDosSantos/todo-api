import { Injectable } from "@nestjs/common";
import { IUserRepository } from "./iuser.repository";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserRepository implements IUserRepository{
    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>
    ){}

    create(user: User) {
        this.repository.save(user);
    }

    findByEmail(email: string): Promise<User | undefined> {
        return this.repository.findOne({where: {email} });
    }

}