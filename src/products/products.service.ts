import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ProductEntity } from './entities/product.entity';
import { ProductRepository } from './repositories/product.repository';

@Injectable()
export class ProductsService extends TypeOrmCrudService<ProductEntity> {
  constructor(private readonly ProductRepository: ProductRepository) {
    super(ProductRepository);
  }
}
