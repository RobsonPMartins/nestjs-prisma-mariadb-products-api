import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Products } from '@prisma/client';

@Injectable()
export class ProductsService {

  constructor(private prisma: PrismaService) { }

  // Retorna todos os produtos
  async getAllProducts(): Promise<Products[]> {
    return this.prisma.products.findMany();
  }

  // Retorna um produto específico pelo ID
  async getProductByid(id: number): Promise<Products | null> {
    return this.prisma.products.findUnique({
      where: { id },
    });
  }

  // Criar um novo produto
  async createProducts(createProductDto: CreateProductDto): Promise<Products> {
    const { name, price, description } = createProductDto
    return this.prisma.products.create({
      data: {
        name,
        price,
        description,
      },
    })
  }

  // Atualizar um produto existente
  async updateProducts(id: number, updateProductDto: UpdateProductDto): Promise<Products> {
    return this.prisma.products.update({
      where: { id },
      data: updateProductDto,
    })
  }

  // Deletar um produto pelo ID
  async deleteProducts(id: number): Promise<Products> {
    return this.prisma.products.delete({
      where: { id },
    })
  }

}
