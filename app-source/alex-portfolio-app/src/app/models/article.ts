export interface Article {
    title: string;
    content: string; //HTML enabled
    shortContent: string;
    tags: string[];
    published: Date;
    seoTitle: string;
    imageName: string;
}