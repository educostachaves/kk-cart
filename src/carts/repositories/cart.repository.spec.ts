import { Test, TestingModule } from '@nestjs/testing';
import { CartRepository } from './cart.repository';

describe('CartRepository', () => {
  let repo: CartRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartRepository],
    }).compile();

    repo = module.get<CartRepository>(CartRepository);
  });

  it('should be defined', () => {
    expect(repo).toBeDefined();
  });
});
