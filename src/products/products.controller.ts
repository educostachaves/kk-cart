import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { ProductEntity } from './entities/product.entity';
import { ProductsService } from './products.service';

@Crud({
  model: {
    type: ProductEntity,
  },
})
@ApiTags('products')
@Controller('products')
export class ProductsController implements CrudController<ProductEntity> {
  constructor(public readonly service: ProductsService) {}
}
