import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductEntity } from '../../products/entities/product.entity';

@Entity('cart')
export class CartEntity {
  @PrimaryGeneratedColumn()
  readonly shoppingCartId: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty({ type: 'number' })
  @Column()
  userId: string;

  @ApiProperty({ type: 'number' })
  @Column()
  totalPrice: string;

  @ApiProperty({ type: 'number' })
  @Column()
  totalQuantity: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => ProductEntity,
    product => product.cart,
  )
  products: ProductEntity[];
}
