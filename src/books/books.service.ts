import { Injectable } from '@nestjs/common'
import { InjectModel, InjectConnection } from '@nestjs/mongoose'
import { Model, Connection } from 'mongoose'
import { Book, BookDocument } from './schemas/book.schema'
import { CreateBookDto } from './interfaces/dto/create-book'
import { UpdateBookDto } from './interfaces/dto/update-book'

@Injectable() 
export class BooksService {
    constructor(
        @InjectModel(Book.name)
        private BookModel: Model<BookDocument>,
        
        @InjectConnection()
        private connection: Connection,
    ) {}

    async create(data: CreateBookDto): Promise<BookDocument> {
        const book = new this.BookModel(data);
        return book.save();
    }

    async update(id: string, data: UpdateBookDto): Promise<BookDocument> {
        return this.BookModel.findByIdAndUpdate({ _id: id }, data,);
    }

    async findAll(): Promise<BookDocument[]> {
        return this.BookModel.find().exec();
    }

    async delete(id: string): Promise<BookDocument> {
        return this.BookModel.findByIdAndRemove({ _id: id });
    }
}

