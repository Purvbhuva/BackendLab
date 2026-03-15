import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productServices:ProductService){}

    @Get()
    getProducts(){
        return this.productServices.getAllProducts();
    }

    @Get(':id')
    getProduct(@Param('id') id:string){
        return this.productServices.getProductsById(Number(id))
    }
}
