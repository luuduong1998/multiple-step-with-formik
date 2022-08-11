import { ApiTwoTone } from "@mui/icons-material";

export interface IMenuHeader {
  text: string;
  path: string;
}

export const apiPath = {
  home: "/",
  checkout: "/checkout",
  about: "/about",
  contact: "/contact",
  service: "/service",
  blog: "/blog",
  showCase: "/show-case",
  product: {
    root: "/product",
    productNew: () => `${apiPath.product}/product-new`,
  },
};

export const menuHeader: IMenuHeader[] = [
  {
    text: "Home",
    path: apiPath.home,
  },
  {
    text: "Checkout",
    path: apiPath.checkout,
  },
  {
    text: "About",
    path: apiPath.about,
  },
  {
    text: "Service",
    path: apiPath.service,
  },
  {
    text: "Showcase",
    path: apiPath.showCase,
  },
  {
    text: "Blog",
    path: apiPath.blog,
  },
  {
    text: "Contact",
    path: apiPath.contact,
  },
];
