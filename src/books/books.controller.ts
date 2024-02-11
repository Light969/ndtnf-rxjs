import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './interfaces/dto/create-book';
import { UpdateBookDto } from './interfaces/dto/update-book';
import { IntParamId } from './interfaces/id-param';
import { BookDocument } from './schemas/book.schema';

@Controller('book')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post() 
  async create(@Body() createBookDto: CreateBookDto) {
    return await this.booksService.create(createBookDto);
  }

  @Get()
  async findAll(): Promise<BookDocument[]> {
    return await this.booksService.findAll();
  }

  @Put(':id')
  async update(
    @Param() { id }: IntParamId,
    @Body() updateBookDto: UpdateBookDto
  ): Promise <BookDocument> {
    return await this.booksService.update(id, updateBookDto);
  }

  @Delete(':id')
  async delete(
    @Param() { id }: IntParamId,
  ): Promise <BookDocument> {
    return await this.booksService.delete(id);
  }
}
