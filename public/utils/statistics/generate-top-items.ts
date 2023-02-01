import { ExpectedTopItemFormat } from "../../../components/statistics/TopItems";

type ItemType = {
  isCompleted: boolean;
  itemId: string;
  quantity: number;
};

type ExpectedDataType = { categoryName: string; items: ItemType[] }[];

export const generateTopItems = (
  items: ExpectedDataType,
  totalQuantity: number
) => {
  if (!items || items.length <= 0 || totalQuantity <= 0) {
    return [];
  }
  //   console.log("Items: ", items);
  //   create a variable to store all the items
  let allItems: ItemType[] = [{ itemId: "", isCompleted: false, quantity: 0 }];

  //   create an array of all the items in each category
  items.forEach((category) => {
    // allItems.concat(category.items);
    const tmpItems = [...allItems, ...category.items];
    allItems = tmpItems;
  });

  //   sort the extracted items in descending order

  allItems.sort((currentItem, nextItem) => {
    return nextItem.quantity - currentItem.quantity;
  });

  //   take the highest 3 items and convert them to the expected top items type
  const topItemsWithPercentages: ExpectedTopItemFormat = allItems
    .slice(0, 3)
    .map((item) => {
      return {
        name: item.itemId,
        percentage: (item.quantity / totalQuantity) * 100,
      };
    });
  //   return the highest 3 items
  return topItemsWithPercentages;
};
