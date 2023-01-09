export type Item = {
  name: string;
  notes: string;
  image: string;
};

export type CategoriesType = {
  name: string;
}[];

export type DetailsPaneSliceType = {
  showing: string;
  cartId: string;
  itemId: string;
};
