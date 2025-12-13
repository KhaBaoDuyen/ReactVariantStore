export type HeaderType = {
    name: string;
    path: string;
};

export type HeaderGroup = {
    title?: string;
    path: string;
    items?: HeaderType[];
} 