export type CategoryItem = {
  id: number;
  title: string;
  image: string;
  slug: string;
};

export type SwipeCategorieProps = {
   data: CategoryItem[];
};