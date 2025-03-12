import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Products } from '@prisma/client';

@Controller('products')
export class ProductsController {

  constructor(private readonly productsService: ProductsService) { }

  // Retorna todos os produtos
  @Get()
  async getAllProducts(): Promise<Products[]> {
    return this.productsService.getAllProducts();
  }

  // Criar um novo produto
  @Post()
  async createProducts(@Body() createProductDto: CreateProductDto): Promise<Products> {
    return this.productsService.createProducts(createProductDto)
  }

  // Retorna um produto específico pelo ID
  @Get(':id')
  async getProductByid(@Param('id') id: string): Promise<Products | null> {
    return this.productsService.getProductByid(Number(id));
  }

  // Atualizar um produto existente
  @Put(':id')
  async updateProducts(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Products> {
    return this.productsService.updateProducts(Number(id), updateProductDto);
  }
  
  // Deletar um produto pelo ID
  @Delete(':id')
  async deleteProducts(@Param('id') id: string): Promise<Products> {
    return this.productsService.deleteProducts(Number(id));
  }

}