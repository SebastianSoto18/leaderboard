import { Category } from "src/utilities/enums/Category";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book{
    @PrimaryGeneratedColumn()
    bookId:number;
    @Column("text")
    title: string;
    @Column("text")
    description: string;
    @Column("text")
    author: string;
    @Column("double")
    price: number;
    @Column("text")
    category: Category;
}
