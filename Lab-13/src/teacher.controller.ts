import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get('hello')
  helloWorld(): string {
    return 'hello world';
  }

  @Get()
  findAll(): string {
    return 'Returning all teachers';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Returning teacher with id ${id}`;
  }

  @Post()
  insert(@Body() body: Record<string, unknown>): string {
    return `Inserted a new teacher with data: ${JSON.stringify(body)}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Record<string, unknown>): string {
    return `Updated teacher ${id} with data: ${JSON.stringify(body)}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `Deleted teacher with id ${id}`;
  }
}