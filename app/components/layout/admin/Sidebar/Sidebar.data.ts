import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Tags,
  BadgeDollarSign,
  Store
} from "lucide-react";

type Sidebar = {
  title: string;
  slug: string;
  icon: React.ElementType;
};

export const SIDEBAR_DATA: Sidebar[] = [
  {
    title: "Dashboard",
    slug: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Products",
    slug: "/admin/products",
    icon: Package,
  },
  {
    title: "Orders",
    slug: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    title: "Users",
    slug: "/admin/users",
    icon: Users,
  },
  {
    title: "Categories",
    slug: "/admin/categories",
    icon: Tags,
  },
  {
    title: "Brands",
    slug: "/admin/brands",
    icon: BadgeDollarSign,
  },
  {
    title: "Stores",
    slug: "/admin/stores",
    icon: Store,
  },
];
