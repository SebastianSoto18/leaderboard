import { Category } from "src/utilities/enums/Category"


export class CreateBookDto{
    readonly Tittle: string
    readonly Description : string
    readonly Price: number
    readonly Category: Category
    readonly Author : string
}