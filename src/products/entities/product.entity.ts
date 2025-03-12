import { Products } from "@prisma/client";

export class ProductEntity implements Products{
    
    id: number;
    name: string;
    price: number;
    description: string;

}
