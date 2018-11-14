interface User {
    id: 3;
    name: string;
}

interface ContentType {
    id: null;
    name: null;
}

export interface New {
    content_type: ContentType;
    created_at: string;
    id: 1;
    text: string;
    title: string;
    updated_at: string;
    url: string;
    user: User;
}
