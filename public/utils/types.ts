export const API_BASE_URL =
  "https://shoppingify-67482-default-rtdb.firebaseio.com/";

export type Item = {
  name: string;
  notes: string;
  image: string;
};

export type ItemsType = {
  name: string;
  notes: string;
  image: string;
  category: string;
};

export type CategoriesType = {
  name: string;
}[];

export type DetailsPaneSliceType = {
  showing: string;
  cartId: string;
  itemId: string;
};

export type HistoryType = {
  title: string;
  data: HistoryCategoryType[];
};

export type HistoryCategoryType = {
  cartTitle: string;
  date: string;
  cartState: string;
  items: SingleHistoryType[];
};

export type SingleHistoryType = {
  categoryName: string;
  items: {
    itemId: string;
    quantity: number;
  }[];
};
