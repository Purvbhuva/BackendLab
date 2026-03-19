import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  findAll(): string {
    return 'Hello world';
  }

  findOne(id: string): string {
    void id;
    return 'Hello world';
  }

  insert(body: Record<string, unknown>): string {
    void body;
    return 'Hello world';
  }

  update(id: string, body: Record<string, unknown>): string {
    void id;
    void body;
    return 'Hello world';
  }

  delete(id: string): string {
    void id;
    return 'Hello world';
  }
}