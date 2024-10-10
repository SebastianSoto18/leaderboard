import { Category } from "src/utilities/enums/Category";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Books{
    @PrimaryGeneratedColumn()
    BookId:number;
    @Column("text")
    Tittle: string;
    @Column("text")
    Description: string;
    @Column("text")
    Author: string;
    @Column("double")
    Price: number;
    @Column("text")
    Category: Category;
}
