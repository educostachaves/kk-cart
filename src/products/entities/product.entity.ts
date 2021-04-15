import { ApiProperty } from '@nestjs/swagger';
import { CartEntity } from '../../carts/entities/cart.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @ApiProperty()
  @Column({ type: 'int' })
  productId: number;

  @ApiProperty()
  @Column({ type: 'float' })
  price: number;

  @ApiProperty()
  @Column({ type: 'int' })
  quantity: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date;

  @ApiProperty({ type: 'number' })
  @ManyToOne(
    () => CartEntity,
    cart => cart.products,
  )
  cart: CartEntity;
}
