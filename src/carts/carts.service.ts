import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CartEntity } from './entities/cart.entity';
import { CartRepository } from './repositories/cart.repository';

@Injectable()
export class CartsService extends TypeOrmCrudService<CartEntity> {
  constructor(private readonly CartRepository: CartRepository) {
    super(CartRepository);
  }

  async findAllWithTasks(userId: number) {
    const carts: CartEntity[] = await this.CartRepository.find({
      where: { user: userId },
      order: {
        createdAt: 'ASC',
      },
      relations: ['tasks'],
    });

    return carts;
  }
}
