import { Test, TestingModule } from '@nestjs/testing';
import { ProductEntity } from './entities/product.entity';
import { ProductsService } from './products.service';
import { ProductRepository } from '../../test/mocks/repositories/product.repository';

describe('ProductsService', () => {
  let service: ProductsService;
  let repo: ProductRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService, ProductRepository],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    repo = module.get<ProductRepository>(ProductRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all products', async () => {
    const testProduct: ProductEntity = {
      productId: 1,
      name: 'product',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(repo, 'find').mockResolvedValueOnce([testProduct]);
    expect(await service.find()).toEqual([testProduct]);
  });
});
