interface User {
    id: 3;
    name: string;
}

interface ContentType {
    id: number;
    name: string;
}

interface Category {
    id: number,
    name: string
}
export interface Content {
    content_type: ContentType;
    created_at: string;
    id: 1;
    text: string;
    title: string;
    updated_at: string;
    url: string;
    user: User;
    category: Category;
}
