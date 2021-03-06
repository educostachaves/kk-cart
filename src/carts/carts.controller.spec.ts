import { Test, TestingModule } from '@nestjs/testing';
import { CartsController } from './carts.controller';
import { CartsService } from './carts.service';
import { CartRepository } from '../../test/mocks/repositories/cart.repository';

describe('Carts Controller', () => {
  let controller: CartsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartsController],
      providers: [CartsService, CartRepository],
    }).compile();

    controller = module.get<CartsController>(CartsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
