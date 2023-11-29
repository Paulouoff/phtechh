import { Paragraph } from "./paragraph"

export interface News {
    id: number,
    title: string,
    subtitle: string,
    createdAt: Date,
    type: string,
    image: string,
    tags: string,
    link: string
    classification: string,
    paragraph : Paragraph[]
} 