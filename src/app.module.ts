import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';

@Module({
  imports: [],
  controllers: [AppController, StudentController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
