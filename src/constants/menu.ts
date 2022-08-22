export interface IMenuHeader {
  text: string;
  path: string;
}

export const apiPath = {
  home: "/",
  checkout: "/checkout",
  about: "/about",
  contact: "/contact",
  component: "/component",
  grid: "/grid",
  muiTable: "/mui-table",
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
    text: "Form",
    path: apiPath.checkout,
  },
  {
    text: "About",
    path: apiPath.about,
  },
  {
    text: "Component",
    path: apiPath.component,
  },
  {
    text: "mui-table",
    path: apiPath.muiTable,
  },
  {
    text: "ag-grid",
    path: apiPath.grid,
  },
  {
    text: "Contact",
    path: apiPath.contact,
  },
];
