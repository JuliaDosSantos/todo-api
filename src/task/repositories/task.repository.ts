import { Injectable } from "@nestjs/common";
import { ITaskRepository } from "./itask.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "../entities/task.entity";
import { Repository } from "typeorm"; 

@Injectable()
export class TaskRepository implements ITaskRepository{
    constructor(
        @InjectRepository(Task)
        private readonly repository: Repository<Task>
    ){}

    create(task: Task) {
        this.repository.save(task);
    }

    findAll() {
        
    }

    findOne() {
        
    }
}