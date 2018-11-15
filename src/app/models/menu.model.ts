export interface Menu {
    value: 'news' | 'videos' | 'articles' | 'decisions';
    label: string;
    icon: string;
    min: 'noticia' | 'video' | 'decisao' | 'artigo';
}
