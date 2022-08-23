export interface IMenuHeader {
  text: string;
  path: string;
  des?: string;
}

export const apiPath = {
  home: "/",
  checkout: "/checkout",
  upload: "/upload",
  contact: "/contact",
  component: "/component",
  grid: "/grid",
  muiTable: "/mui-table",
  login: "/login",
  product: {
    root: "/product",
    productNew: () => `${apiPath.product}/product-new`,
  },
};

export const menuHeader: IMenuHeader[] = [
  {
    text: "Home",
    path: apiPath.home,
    des: "Home page",
  },
  {
    text: "Form",
    path: apiPath.checkout,
    des: "multi step form",
  },
  {
    text: "Upload",
    path: apiPath.upload,
    des: "Upload file with dropzone",
  },
  {
    text: "E-Boundary",
    path: apiPath.component,
    des: "Error boundary ",
  },
  {
    text: "mui-table",
    path: apiPath.muiTable,
  },
  {
    text: "ag-grid",
    path: apiPath.grid,
    des: "Ag-grid library",
  },
  {
    text: "Contact",
    path: apiPath.contact,
  },
];
