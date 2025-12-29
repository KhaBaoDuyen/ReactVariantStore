export type CategoryItem = {
  id: number;
  title: string;
  image: string;
  path: string;
};

export type SwipeCategorieProps = {
   data: CategoryItem[];
};