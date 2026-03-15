import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get('hello')
  helloWorld(): string {
    return 'hello world';
  }

  @Get()
  findAll(): string {
    return 'Returning all students';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Returning student with id ${id}`;
  }

  @Post()
  insert(@Body() body: Record<string, unknown>): string {
    return `Inserted a new student with data: ${JSON.stringify(body)}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Record<string, unknown>): string {
    return `Updated student ${id} with data: ${JSON.stringify(body)}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `Deleted student with id ${id}`;
  }
}