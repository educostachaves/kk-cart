import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateInitialEntities1618450059046 implements MigrationInterface {
  name = 'CreateInitialEntities1618450059046';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "product" ("id" SERIAL NOT NULL, "productId" integer NOT NULL, "price" double precision NOT NULL, "quantity" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "cartShoppingCartId" integer, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "cart" ("shoppingCartId" SERIAL NOT NULL, "name" character varying NOT NULL, "userId" character varying NOT NULL, "totalPrice" character varying NOT NULL, "totalQuantity" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_e4f6c652de6aecc99362aa0f302" PRIMARY KEY ("shoppingCartId"))`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "product" ADD CONSTRAINT "FK_204c1ec788c74d6ae6fccbb06bd" FOREIGN KEY ("cartShoppingCartId") REFERENCES "cart"("shoppingCartId") ON DELETE NO ACTION ON UPDATE NO ACTION`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_204c1ec788c74d6ae6fccbb06bd"`, undefined);
    await queryRunner.query(`DROP TABLE "cart"`, undefined);
    await queryRunner.query(`DROP TABLE "product"`, undefined);
  }
}
