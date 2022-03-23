import { Module } from '@nestjs/common';

import { ProductsController } from './controllers/products.controller';
import { BrandsController } from './controllers/brands.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductService } from './services/product.service';
import { BrandsService } from './services/brands.service';
import { CategoriesService } from './services/categories.service';

@Module({
  controllers: [ProductsController, CategoriesController, BrandsController],
  providers: [ProductService, BrandsService, CategoriesService],
  exports: [ProductService],
})
export class ProductsModule {}
