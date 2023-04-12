
import { Cart } from "src/cart/entities/cart.entity";
import { Product } from "src/product/entities/product.entity";
import { User } from "src/user/entities/user.entity";

export class Purchase {
  id?: string;
  user?: User;
  cart?: Cart;
  product?: Product[];
  createdAt?: Date;
  updatedAt?: Date;
}
