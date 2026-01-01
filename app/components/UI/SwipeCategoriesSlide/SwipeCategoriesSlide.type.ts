export type CategoryItem = {
  id: number;
  title: string;
  icon?: string;
  image?: string;
  slug: string;
};

export type SwipeCategorieProps = {
  data: CategoryItem[];
  type?: "icon" | "image";
};
