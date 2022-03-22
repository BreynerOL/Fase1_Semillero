import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
  //ParseIntPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { ParseIntPipe } from '../common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from './../dtos/products.dtos';

import { ProductService } from './../services/product.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    /*
    return {
      message: `products: limit=> ${limit}, offset ${offset}, marca ${brand}`,
    */
    return this.productService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return 'Yo soy un filter';
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    /*response.status(200).send({
      message: `product ${productId}`,
    });*/
    return this.productService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    /*return {
      message: 'accion de crear',
      payload,
    };*/
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
    return this.productService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
