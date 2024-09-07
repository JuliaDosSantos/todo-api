import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task/entities/task.entity';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    TaskModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // seu usuário do MySQL
      password: 'mysql', // sua senha do MySQL
      database: 'todo-api', // nome do banco de dados
      entities: [Task, User], // caminho das entidades
      synchronize: true, // NÃO usar em produção, apenas para dev (sincroniza automaticamente as entidades com o banco)
    }),
    UserModule,
    LoginModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
