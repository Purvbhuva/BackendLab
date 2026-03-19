import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  findAll(): string {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return this.studentService.findOne(id);
  }

  @Post()
  insert(@Body() body: Record<string, unknown>): string {
    return this.studentService.insert(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Record<string, unknown>): string {
    return this.studentService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return this.studentService.delete(id);
  }
}