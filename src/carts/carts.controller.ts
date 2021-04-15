import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { CartEntity } from './entities/cart.entity';
import { CartsService } from './carts.service';

@Crud({
  model: {
    type: CartEntity,
  },
})
@ApiTags('carts')
@Controller('carts')
export class CartsController implements CrudController<CartEntity> {
  constructor(public readonly service: CartsService) {}
}
