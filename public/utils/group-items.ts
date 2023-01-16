import { ItemsType } from "../../store/items-slice";

export function groupItems(items: ItemsType[]) {
  interface ItemsByCategories {
    [key: string]: any;
  }

  let itemsByCategories: ItemsByCategories = {};

  Object.values(items).forEach((item) => {
    const itemCategory = item.category;
    if (!itemsByCategories[itemCategory]) {
      itemsByCategories[itemCategory] = [item];
    } else {
      const tmp = itemsByCategories[itemCategory];
      itemsByCategories[itemCategory] = [...tmp, item];
    }
  });

//   console.log("Items by categories: ", itemsByCategories);
  return {
    items: Object.values(items),
    itemsByCategories,
    categories: Object.keys(itemsByCategories),
  };
}
