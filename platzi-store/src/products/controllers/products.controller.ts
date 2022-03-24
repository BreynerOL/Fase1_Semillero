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
import { ParseIntPipe } from '../../common/parse-int.pipe';

import { ApiTags, ApiOperation } from '@nestjs/swagger';

import {
  CreateProductDto,
  UpdateProductDto,
  FilterProductDto,
} from './../dtos/products.dtos';

import { ProductService } from './../services/product.service';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}
  @Get()
  @ApiOperation({ summary: 'List of products' })
  getProducts(@Query() params: FilterProductDto) {
    return this.productService.findAll(params);
  }

  @Get('filter')
  getProductFilter() {
    return 'Yo soy un filter';
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.productService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productService.update(+id, payload);
  }

  @Put(':id/category/:categoryId')
  addCategoryToProduct(
    @Param('id', ParseIntPipe) id: number,
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ) {
    return this.productService.addCategoryToProduct(id, categoryId);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.remove(+id);
  }

  @Delete(':id/category/:categoryId')
  deleteCategory(
    @Param('id', ParseIntPipe) id: number,
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ) {
    return this.productService.removecategoryByProduct(id, categoryId);
  }
}
