import { Test, TestingModule } from '@nestjs/testing';
import { ProductRepository } from './product.repository';

describe('ProductRepository', () => {
  let repo: ProductRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductRepository],
    }).compile();

    repo = module.get<ProductRepository>(ProductRepository);
  });

  it('should be defined', () => {
    expect(repo).toBeDefined();
  });
});
