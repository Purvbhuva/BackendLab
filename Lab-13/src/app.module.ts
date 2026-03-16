import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { StudentController } from './student.controller';
import { TeacherController } from './teacher.controller';
import { UsersController } from './users/users.controller';

@Module({
  controllers: [StudentController, TeacherController, CourseController, UsersController],
})
export class AppModule {}