import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('courses')
export class CourseController {
  @Get('hello')
  helloWorld(): string {
    return 'hello world';
  }

  @Get()
  findAll(): string {
    return 'Returning all courses';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Returning course with id ${id}`;
  }

  @Post()
  insert(@Body() body: Record<string, unknown>): string {
    return `Inserted a new course with data: ${JSON.stringify(body)}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Record<string, unknown>): string {
    return `Updated course ${id} with data: ${JSON.stringify(body)}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `Deleted course with id ${id}`;
  }
}