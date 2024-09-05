import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ITaskRepository } from './repositories/itask.repository';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    private repository: ITaskRepository
  ){}

  create(createTaskDto: CreateTaskDto) {
    const task = new Task();

    task.title = createTaskDto.title;

    task.data = createTaskDto.data;

    task.hora = createTaskDto.hora;

    task.descricao = createTaskDto.descricao;

    task.finalizada = createTaskDto.finalizada;
    
    task.tipo = createTaskDto.tipo;

    this.repository.create(createTaskDto);
    
  }

  findAll() {
    return `This action returns all task`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
