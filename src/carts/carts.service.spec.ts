import { Test, TestingModule } from '@nestjs/testing';
import { CartEntity } from './entities/cart.entity';
import { CartsService } from './carts.service';
import { CartRepository } from '../../test/mocks/repositories/cart.repository';

describe('CartsService', () => {
  let service: CartsService;
  let repo: CartRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartsService, CartRepository],
    }).compile();

    service = module.get<CartsService>(CartsService);
    repo = module.get<CartRepository>(CartRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all carts', async () => {
    const testCart: CartEntity = {
      id: 1,
      name: 'cart',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(repo, 'find').mockResolvedValueOnce([testCart]);
    expect(await service.find()).toEqual([testCart]);
  });
});
