import { Task } from "../entities/task.entity";

export abstract class ITaskRepository {
    abstract create(task: Task)

    abstract findAll();

    abstract findOne();
}