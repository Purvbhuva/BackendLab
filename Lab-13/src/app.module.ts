import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { StudentController } from './student.controller';
import { TeacherController } from './teacher.controller';

@Module({
  controllers: [StudentController, TeacherController, CourseController],
})
export class AppModule {}